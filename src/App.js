import React, { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import { Created, Commit } from "./components";

function App({ ids }) {
  const [hash, setHash] = useState(ids[0]);
  console.log(hash);
  return (
    <div className="App">
      <select name="hashes" id="hashes">
        {ids.map((id) => {
          return (
            <option value={id} onClick={(e) => setHash(e.target.value)}>
              {id}
            </option>
          );
        })}
      </select>
      <Commit hash={hash} />
      <Created />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { ids: state.ids };
};

export default connect(mapStateToProps)(App);
