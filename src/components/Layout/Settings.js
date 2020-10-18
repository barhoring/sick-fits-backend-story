import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import monacoThemes from "monaco-themes/themes/themelist";
import { monaco } from "@monaco-editor/react";
import { MenuSettingsContainer } from "../../containers";
import { FormControlLabel, Switch } from "@material-ui/core/";

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
import SettingsIcon from "@material-ui/icons/Settings";
import ThemeSelect from "../Settings/ThemeSelect";

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
      monaco.editor.defineTheme(theme, themeData);
      res();
    });
  });
};

const Settings = ({ open, handleClick }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        style={{ marginLeft: "2rem" }}
      >
        {/* <ThemeList /> */}
        <ThemeSelect />
        {/* <MenuSettingsContainer /> */}
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
            {/* <FormControlLabel
              style={{ right: "1rem", position: "absolute" }}
              control={
                <Switch
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  name="darkMode"
                />
              }
              label={isDarkMode ? "Dark" : "light"}
            /> */}
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

export default Settings;
