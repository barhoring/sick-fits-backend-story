import { StylesContext } from "@material-ui/styles";
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
        <Typography className={classes.gitty} variant="h1" gutterBottom>
          Gitty
        </Typography>
        <h2 className={classes.brief}>Wow, I finally get it!</h2>
      </div>
      <div>(Header)</div>
      {isDarkMode ? <div>Dark </div> : <div>light </div>}
      <button onClick={toggleDarkMode}>Dark Mode</button>
    </section>
  );
};

export default Header;
