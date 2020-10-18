import React from "react";
import { CommitContainer, CommitSelectorContainer } from "../../containers";
import { Chapter } from "../../components";
const CommitView = ({ hash }) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      {" "}
      <CommitSelectorContainer />
      <Chapter hash={hash} />
      <CommitContainer />
    </div>
  );
};

export default CommitView;
