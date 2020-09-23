import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import useStyles from "./useStyles";

debugger;
const Header = () => {
  const classes = useStyles();
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <section className={classes.section}>
      <h1>Gitty</h1>
      <div>(Header)</div>
      {isDarkMode ? <div>Dark </div> : <div>light </div>}
      <button onClick={toggleDarkMode}>Dark Mode</button>
    </section>
  );
};

export default Header;
