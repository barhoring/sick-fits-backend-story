import React, { useState } from "react";
import { Drawer } from "@material-ui/core";
const Sidebar = ({ isMenuOpen, onOpen, onClose }) => {
  return (
    <div>
      <Drawer anchor="left" open={isMenuOpen} onClose={onClose}>
        <div>fuck</div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
