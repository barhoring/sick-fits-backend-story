import React from "react";
import Header from "./Header";
import { CommitContainer } from "../../containers";

import { ThemeProvider } from "../../ThemeContext";
import Commit from "../Commit";

const Layout = ({ hash }) => {
  return (
    <ThemeProvider>
      <Header />
      <CommitContainer />
    </ThemeProvider>
  );
};

export default Layout;
