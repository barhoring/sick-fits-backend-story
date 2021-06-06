import React, { useEffect } from "react";
import { CommitContainer, CommitSelectorContainer } from "../../containers";
import { Chapter } from "../../components";
// import filePath from "../../repoSettings.json";
import { chapter_base_uri as filePath} from "../../repoSettings.json";
import { navigate, redirectTo } from "@reach/router";


const CommitView = ({ hash , prevHash, nextHash }) => {

  if (!hash) {
    navigate(`/commits/a6d5b6824251cded54b2ab5c8065545d6fc2476e`);
  }

  const selectorProps = {prevHash, nextHash, hash, };
  const commitProps = { hash, prevHash };
  return (
    <div style={{ marginTop: "5rem" }}>
      {" "}
      <CommitSelectorContainer {...selectorProps} />
      {filePath && (<Chapter hash={hash} /> )}
      <CommitContainer {...commitProps} />
      {/* <CommitContainer commitId={commitId} /> */}
    </div>
  );
};

export default CommitView;
