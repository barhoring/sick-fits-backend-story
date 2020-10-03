import React from "react";
import Header from "./Header";
import { CommitContainer, CommitSelectorContainer } from "../../containers";

import { ThemeProvider } from "../../ThemeContext";

const Layout = () => {
  return (
    <ThemeProvider>
      <Header />
      <CommitSelectorContainer />
      <CommitContainer />
    </ThemeProvider>
  );
};

export default Layout;
