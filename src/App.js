import { DiffEditor } from "./components";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Commit } from "./components";
import "./App.css";

function App({ ids }) {
  const [hash, setHash] = useState(ids[0]);
  console.log(hash);
  return (
    <div className="App" style={{ width: "100%", height: "100%" }}>
      <div>
        <select name="hashes" id="hashes">
          {ids.map((id) => {
            return (
              <option
                key={id}
                value={id}
                onClick={(e) => setHash(e.target.value)}
              >
                {id}
              </option>
            );
          })}
        </select>
      </div>
      <DiffEditor />
      <Commit hash={hash} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { ids: state.ids };
};

export default connect(mapStateToProps)(App);
