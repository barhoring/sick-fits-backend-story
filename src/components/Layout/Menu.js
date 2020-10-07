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

const getListItemComponent = (itemDetails) => {
  const Component = itemDetails.component;
  return (
    <Link
      to={itemDetails.path}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ListItem button key={itemDetails.title}>
        <ListItemIcon>
          <Component size="2rem" />
        </ListItemIcon>
        <ListItemText primary={itemDetails.title} />
      </ListItem>
      <Divider />
    </Link>
  );
};

const menuItems = [
  { title: "Commits", path: "/", component: GoSettings },
  {
    title: "Settings",
    path: "/settings",
    component: BsCodeSlash,
  },
  {
    title: "About",
    path: "/about",
    component: MailIcon,
  },
];

const Menu = () => {
  const classes = useStyles();
  return (
    <div className={classes.list} role="presentation">
      <List>
        {menuItems.map((item, index) => {
          return getListItemComponent(item);
        })}
      </List>
    </div>
  );
};
export default Menu;
