import React from "react";
import { AddedFilesContainer, CommitInfoContainer } from "../../containers";

import { ModifiedContainer } from "../../containers";

const Commit = ({ hash, data, commitId, thisHash,
  prevHash,
  nextHash }) => {
    
    console.dir( { thisHash, prevHash, nextHash})
    debugger;
  return (
    <>
      <CommitInfoContainer commitId={thisHash} />
      <ModifiedContainer commitId={thisHash} />
      <AddedFilesContainer commitId={thisHash} />
    </>
  );
};

export default Commit;
