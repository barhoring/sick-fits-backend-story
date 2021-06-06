import React, { useEffect } from "react";
import { CommitContainer, CommitSelectorContainer } from "../../containers";
import { Chapter } from "../../components";
// import filePath from "../../repoSettings.json";
import { chapter_base_uri as filePath} from "../../repoSettings.json";


const CommitView = ({ hash, commitId, navigate, firstHash }) => {
  // useEffect(() => {
  //   if (!commitId) {
  //     navigate(`/commits/${firstHash}`);
  //   }
  // }, [commitId, firstHash, navigate])
  return (
    <div style={{ marginTop: "5rem" }}>
      {" "}
      <div>wtf { hash }</div>
      <CommitSelectorContainer commitId={commitId} />
      {filePath && (<Chapter hash={hash} /> )}
      {/* <div>"filePath" {filePath || "null"}</div> */}
      <CommitContainer commitId={commitId} />
      {/* <CommitContainer commitId={commitId} /> */}
    </div>
  );
};

export default CommitView;
