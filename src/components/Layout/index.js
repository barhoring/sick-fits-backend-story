import React, { useState } from "react";
import Header from "./Header";
import { CommitViewContainer } from "../../containers";
import { Router } from "@reach/router";
import { SettingsPage, About } from "../../pages";

import { ThemeProvider } from "../../ThemeContext";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Router>
        <CommitViewContainer isMenuOpen={isMenuOpen} path="/" />
        <SettingsPage path="/settings/" />
        <About path="/about/" />
        {/* <CommitViewContainer isMenuOpen={isMenuOpen} default /> */}
      </Router>
    </ThemeProvider>
  );
};

export default Layout;
