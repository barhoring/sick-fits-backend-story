import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";

import { Link } from "@reach/router";
import { StarBorder, ExpandLess, ExpandMore } from "@material-ui/icons";
import InboxIcon from "@material-ui/icons/MoveToInbox";

import { BsCodeSlash } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { GoHeart } from "react-icons/go";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const getListItemComponent = (itemDetails, onClick) => {
  const Component = itemDetails.component;
  return (
    <Link
      to={itemDetails.path}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ListItem
        button
        key={itemDetails.title}
        onClick={onClick ? onClick : null}
      >
        <ListItemIcon>
          <Component size="2rem" />
        </ListItemIcon>
        <ListItemText primary={itemDetails.title} />
      </ListItem>
      <Divider />
    </Link>
  );
};

const Settings = ({ open, handleClick }) => {
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            {/* <ListItem button className={classes.nested}> */}
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

const menuItems = [
  { title: "Commits", path: "/", component: BsCodeSlash },
  {
    title: "Settings",
    path: "/settings",
    component: GoSettings,
  },
  {
    title: "About",
    path: "/about",
    component: GoHeart,
  },
];

const menu = menuItems.map((item) => getListItemComponent(item));

const Menu = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.list} role="presentation">
      <List>
        <Divider />

        {/* {menuItems.map((item, index) => {
          return getListItemComponent(item);
        })} */}
        {menu}
        {getListItemComponent(
          { title: "Settings", path: "/", component: GoSettings },
          handleClick
        )}
        <Settings {...{ open, handleClick }} />
      </List>
    </div>
  );
};
export default Menu;
