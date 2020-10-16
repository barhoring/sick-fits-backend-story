import React from "react";
import { CommitContainer, CommitSelectorContainer } from "../../containers";

const CommitView = () => {
  return (
    <div>
      {" "}
      <CommitSelectorContainer />
      <CommitContainer />
    </div>
  );
};

export default CommitView;
