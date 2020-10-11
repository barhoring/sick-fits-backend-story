import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import monacoThemes from "monaco-themes/themes/themelist";
import { monaco } from "@monaco-editor/react";
import { MenuSettingsContainer } from "../../containers";

import {
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  TextField,
  MenuItem,
} from "@material-ui/core";
import { StarBorder, ExpandLess, ExpandMore } from "@material-ui/icons";
import InboxIcon from "@material-ui/icons/MoveToInbox";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const defineTheme = (theme) => {
  return new Promise((res) => {
    Promise.all([
      monaco.init(),
      import(`monaco-themes/themes/${monacoThemes[theme]}.json`),
    ]).then(([monaco, themeData]) => {
      debugger;
      monaco.editor.defineTheme(theme, themeData);
      res();
    });
  });
};

export const ThemeSelect = ({ settings, addTheme, setTheme }) => {
  console.log(settings);
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-theme"
          select
          label="theme"
          value={currency}
          onChange={handleChange}
          helperText="select theme"
          variant="outlined"
        >
          {Object.keys(monacoThemes).map((theme) => (
            <MenuItem key={theme} value={theme}>
              {monacoThemes[theme]}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
};

const Settings = ({ open, handleClick }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {/* <ThemeList /> */}
        <ThemeSelect />
        <MenuSettingsContainer />
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

export default Settings;
