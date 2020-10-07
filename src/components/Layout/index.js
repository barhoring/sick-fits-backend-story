import React from "react";
import Header from "./Header";
import { CommitViewContainer } from "../../containers";
import { Router } from "@reach/router";
import { Settings, About } from "../../pages";

import { ThemeProvider } from "../../ThemeContext";

const Layout = () => {
  return (
    <ThemeProvider>
      <Header />
      <Router>
        <CommitViewContainer path="/" />
        <Settings path="/settings/" />
        <About path="/about/" />
        <CommitViewContainer default />
      </Router>
    </ThemeProvider>
  );
};

export default Layout;
