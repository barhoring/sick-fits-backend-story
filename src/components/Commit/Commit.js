import React from "react";
import { AddedFilesContainer, CommitInfoContainer } from "../../containers";

import { ModifiedContainer } from "../../containers";

const Commit = ({ hash, data, commitId,
  prevHash,
  nextHash }) => {

  return (
    <>
      <CommitInfoContainer hash={hash} />
      {/* todo modified prev  */}
      <ModifiedContainer hash={hash} prevHash={prevHash} />
      <AddedFilesContainer hash={hash} />
    </>
  );
};

export default Commit;
