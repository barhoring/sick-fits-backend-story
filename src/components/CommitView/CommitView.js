import React, { useEffect } from "react";
import { CommitContainer, CommitSelectorContainer } from "../../containers";
import { Chapter } from "../../components";
// import filePath from "../../repoSettings.json";
import { chapter_base_uri as filePath} from "../../repoSettings.json";


const CommitView = ({ hash , commitId, navigate, firstHash, prevHash, nextHash
}) => {
  // useEffect(() => {
  //   if (!commitId) {
  //     navigate(`/commits/${firstHash}`);
  //   }
  // }, [commitId, firstHash, navigate])
  const selectorProps = {prevHash, nextHash, hash, };
  const commitProps = { hash };
  return (
    <div style={{ marginTop: "5rem" }}>
      {" "}
      <div>wtf { hash }</div>
      <CommitSelectorContainer {...selectorProps} />
      {filePath && (<Chapter hash={hash} /> )}
      {/* <div>"filePath" {filePath || "null"}</div> */}
      {/* todo */}
      <CommitContainer {...commitProps} />
      {/* <CommitContainer commitId={commitId} /> */}
    </div>
  );
};

export default CommitView;
