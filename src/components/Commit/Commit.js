import React from "react";
import { AddedFilesContainer, CommitInfoContainer } from "../../containers";

import { ModifiedContainer } from "../../containers";

const Commit = ({ hash, data, commitId,
  prevHash,
  nextHash }) => {
    
    console.dir( { hash, prevHash, nextHash})
    debugger;
  return (
    <>
      <CommitInfoContainer hash={hash} />
      <ModifiedContainer hash={hash} />
      <AddedFilesContainer hash={hash} />
    </>
  );
};

export default Commit;
