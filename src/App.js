import React, { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import { Created, Commit } from "./components";

const tmp_hash = "0a7c97cc78052b397062c70c6a08c55613f9d102";

function App({ ids }) {
  const [hash, setHash] = useState(ids[0]);
  console.log(hash);
  return (
    <div className="App">
      <select
        name="hashes"
        id="hashes"
        // onClick={(e) => {
        //   debugger;
        //   console.log(e.target);
        // }}
      >
        {ids.map((id) => {
          return (
            <option value={id} onClick={(e) => setHash(e.target.value)}>
              {id}
            </option>
          );
        })}
        <option value="volvo">Volvo</option>
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
