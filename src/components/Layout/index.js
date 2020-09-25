import React from "react";
import Header from "./Header";
import { CommitContainer, CommitSelectorContainer } from "../../containers";

import { ThemeProvider } from "../../ThemeContext";
import Commit from "../Commit";

const Layout = ({ hash }) => {
  return (
    <ThemeProvider>
      <Header />
      <CommitSelectorContainer />
      <CommitContainer />
    </ThemeProvider>
  );
};

export default Layout;
