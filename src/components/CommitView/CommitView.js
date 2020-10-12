import React from "react";
import { CommitContainer, CommitSelectorContainer } from "../../containers";

const CommitView = ({ isMenuOpen }) => {
  debugger;
  return (
    <div>
      {" "}
      <div style={{ marginTop: "50px" }}>
        isMenuOpen:
        {isMenuOpen.toString()}
      </div>
      <CommitSelectorContainer />
      <CommitContainer />
    </div>
  );
};

export default CommitView;
