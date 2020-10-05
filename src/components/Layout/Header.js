import { FormControlLabel, Switch } from "@material-ui/core/";
import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import Typography from "@material-ui/core/Typography";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./useStyles";

const Header = () => {
  const classes = useStyles();
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div className={classes.root}>
        <AppBar color="default">
          <Toolbar variant="dense">
            <IconButton color="inherit" size="medium">
              <MenuIcon />
            </IconButton>
            <div>
              <Typography
                className={`${classes.gitty} ${classes.title}`}
                variant="h6"
              >
                git:story
              </Typography>
              {/* <Typography variant="h6" gutterBottom>
              A better way to understand code
            </Typography> */}
            </div>
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
