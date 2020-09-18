import React from "react";
import "./App.css";

import { Created, Commit } from "./components";

const tmp_hash = "0a7c97cc78052b397062c70c6a08c55613f9d102";

function App() {
  return (
    <div className="App">
      <Commit hash={tmp_hash} />
      <Created />
    </div>
  );
}

export default App;
