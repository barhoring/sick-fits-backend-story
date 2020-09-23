import React from "react";
import Header from "./Header";

import { ThemeProvider } from "../../ThemeContext";
import Commit from "../Commit";

const Layout = ({ hash }) => {
  return (
    <ThemeProvider>
      <Header />
      <Commit hash={hash} />
    </ThemeProvider>
  );
};

export default Layout;
