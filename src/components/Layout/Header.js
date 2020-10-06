import { FormControlLabel, Switch } from "@material-ui/core/";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import Typography from "@material-ui/core/Typography";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./useStyles";
import Sidebar from "./Sidebar";
const Header = () => {
  const classes = useStyles();
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleSidebar = (open) => (event) => {
    debugger;
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    debugger;
    setIsMenuOpen(open);
  };
  return (
    <>
      <div className={classes.root}>
        <AppBar color="default" position="static">
          <Toolbar variant="dense">
            <Sidebar
              isMenuOpen={isMenuOpen}
              onOpen={toggleSidebar(true)}
              onClose={toggleSidebar(false)}
            />
            <IconButton
              color="inherit"
              size="medium"
              onClick={toggleSidebar(true)}
            >
              <MenuIcon />
            </IconButton>
            <div>
              <Typography className={classes.title} variant="h5">
                git:story
              </Typography>
            </div>
            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexGrow: 2,
              }}
            >
              <Link to="/">Home</Link> <Link to="/settings">Setings</Link>
            </div> */}

            <FormControlLabel
              style={{ right: "1rem", position: "absolute" }}
              control={
                <Switch
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  name="darkMode"
                />
              }
              label={isDarkMode ? "Dark" : "light"}
            />
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Header;
