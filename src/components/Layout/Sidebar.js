import React, { useState } from "react";
import { Drawer } from "@material-ui/core";
import Menu from "./Menu";

const Sidebar = ({ isMenuOpen, onOpen, onClose }) => {
  return (
    <div>
      <Drawer anchor="left" open={isMenuOpen} onClose={onClose}>
        <Menu />
      </Drawer>
    </div>
  );
};

export default Sidebar;
