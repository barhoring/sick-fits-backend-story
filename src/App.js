import React from "react";
import { LayoutContainer } from "./containers";
import { connect } from "react-redux";

import "./App.css";

function App() {
  return (
    <>
      <div style={{ marginBottom: "1rem" }}></div>
      <div className="App" style={{ width: "100%", height: "100%" }}>
        <LayoutContainer />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(App);
