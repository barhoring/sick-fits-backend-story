import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

debugger;
const Header = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  debugger;
  return (
    <section>
      <h1>Gitty</h1>
      <div>(Header)</div>
      {isDarkMode ? <div>Dark </div> : <div>light </div>}
      <button onClick={toggleDarkMode}>Dark Mode</button>
    </section>
  );
};

export default Header;
