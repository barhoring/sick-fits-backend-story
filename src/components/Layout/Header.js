import { StylesContext } from "@material-ui/styles";
import { FormControlLabel, Switch } from "@material-ui/core/";
import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import Typography from "@material-ui/core/Typography";
import useStyles from "./useStyles";

const Header = () => {
  const classes = useStyles();
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <section className={classes.section}>
      <div className="flex vertical">
        <Typography className={classes.gitty} variant="h1">
          Gitty
        </Typography>
        <Typography variant="h6" gutterBottom>
          A better way to understand code
        </Typography>
        {/* <Typography className={classes.brief} variant="h3" gutterBottom>
          I finally get it!
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
    </section>
  );
};

export default Header;
