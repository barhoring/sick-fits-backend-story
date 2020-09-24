import React, { useState } from "react";
import { CommitSelectorContainer } from "./containers";
import { connect } from "react-redux";
import { Layout } from "./components";
import "./App.css";

function App({ ids }) {
  const [hash, setHash] = useState(ids[0]);
  console.log(hash);
  return (
    <div className="App" style={{ width: "100%", height: "100%" }}>
      <div>
        <CommitSelectorContainer ids={ids} />
      </div>
      <Layout hash={hash} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { ids: state.commits.ids };
};

export default connect(mapStateToProps)(App);
