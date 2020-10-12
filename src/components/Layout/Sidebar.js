import React, { useState } from "react";
import { Drawer } from "@material-ui/core";
import Menu from "./Menu";
import { connect } from "react-redux";
import { setTheme } from "../../actions/settings-actions";

const mapStateToProps = (state) => {
  return {
    theme: state.settings.theme,
  };
};

const mapDispatchToProps = { setTheme };

const Sidebar = ({ isMenuOpen, onOpen, onClose }) => {
  return (
    <div>
      <Drawer anchor="left" open={isMenuOpen} onClose={onClose}>
        <Menu />
      </Drawer>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
