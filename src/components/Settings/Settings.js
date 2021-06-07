import React from "react";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import SettingsIcon from "@material-ui/icons/Settings";
import ThemeSelect from "./ThemeSelect";

const Settings = ({ setDiffEditorRenderSideBySide, renderSideBySide }) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
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
          <FormControlLabel
            style={{ right: "1rem", position: "absolute" }}
            control={
              <Switch
                checked={renderSideBySide}
                onChange={() =>
                  setDiffEditorRenderSideBySide(!renderSideBySide)
                }
                name="darkMode"
              />
            }
            label="Diff Editor: render side by side"
          />
        </List>
      </Collapse>
    </>
  );
};

export default Settings;
