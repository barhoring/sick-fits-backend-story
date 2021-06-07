import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
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
        <ThemeSelect />
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
