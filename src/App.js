import { DiffEditor } from "./components";
import React, { useState } from "react";
import { CommitSelector } from "./components";
import { connect } from "react-redux";
import { Layout } from "./components";
import "./App.css";

function App({ ids }) {
  const [hash, setHash] = useState(ids[0]);
  console.log(hash);
  return (
    <div className="App" style={{ width: "100%", height: "100%" }}>
      <div>
        <CommitSelector ids={ids} />
      </div>
      <Layout hash={hash} />
    </div>
  );
}

const mapStateToProps = (state) => {
  debugger;
  return { ids: state.commits.ids };
};

export default connect(mapStateToProps)(App);
