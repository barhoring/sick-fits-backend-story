import React from "react";
import { CommitContainer, CommitSelectorContainer } from "../../containers";
import { Chapter } from "../../components";
const CommitView = ({ hash }) => {
  return (
    <div style={{ marginTop: "10rem" }}>
      {" "}
      <Chapter hash={hash} />
      <CommitSelectorContainer />
      <CommitContainer />
    </div>
  );
};

export default CommitView;
