import React from "react";
import Header from "./Header";
import { CommitViewContainer } from "../../containers";
import { Router } from "@reach/router";
import { Settings } from "../../pages";

import { ThemeProvider } from "../../ThemeContext";

const Layout = () => {
  return (
    <ThemeProvider>
      <Header />
      <Router>
        <CommitViewContainer path="/" />
        <Settings path="/settings/" />
        <CommitViewContainer default />
        {/* <CommitSelectorContainer /> */}
        {/* <CommitContainer /> */}
      </Router>
    </ThemeProvider>
  );
};

export default Layout;
