import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { Link } from "@reach/router";
import { SettingsContainer } from "../../containers";
// import Settings from "../../components/Settings";

import { BsCodeSlash } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { GoHeart } from "react-icons/go";

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
}));

const getListItemComponent = (itemDetails, onClick) => {
  const Component = itemDetails.component;
  return (
    <Link
      key={itemDetails}
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

const menuItems = [
  { title: "Commits", path: "/", component: BsCodeSlash },
  {
    title: "About",
    path: "/about",
    component: GoHeart,
  },
];

const menu = menuItems.map((item) => getListItemComponent(item));

const Menu = () => {
  const classes = useStyles();
  return (
    <div className={classes.list} role="presentation">
      <List>
        <Divider />
        {menu}
        <SettingsContainer />
      </List>
    </div>
  );
};
export default Menu;
