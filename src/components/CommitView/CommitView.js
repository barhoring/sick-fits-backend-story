import React from "react";
import { CommitContainer, CommitSelectorContainer } from "../../containers";
import { Chapter } from "../../components";
// import filePath from "../../repoSettings.json";
import { chapter_base_uri as filePath} from "../../repoSettings.json";


const CommitView = ({ hash }) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      {" "}
      <CommitSelectorContainer />
      {filePath && (<Chapter hash={hash} /> )}
      {/* <div>"filePath" {filePath || "null"}</div> */}
      <CommitContainer />
    </div>
  );
};

export default CommitView;
