import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { Link } from "@reach/router";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import SettingsIcon from "@material-ui/icons/Settings";
import CodeIcon from "@material-ui/icons/Code";

import { FaBeer } from "react-icons/fa";

import { BsCodeSlash } from "react-icons/bs";
import { GoSettings } from "react-icons/go";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const menuItems = [
  { title: "Commits", path: "/" },
  { title: "Settings", path: "/settings" },
];

const Menu = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.list}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <Link
            to={item.path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem button key={item.title}>
              <ListItemIcon>
                {index % 2 === 1 ? (
                  <GoSettings size="2rem" />
                ) : (
                  <BsCodeSlash size="2rem" />
                )}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {["About"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default Menu;
