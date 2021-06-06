import React from "react";
import { AddedFilesContainer, CommitInfoContainer } from "../../containers";

import { ModifiedContainer } from "../../containers";

const Commit = ({ hash, prevHash }) => {

  return (
    <>
      <CommitInfoContainer hash={hash} />
      <ModifiedContainer hash={hash} prevHash={prevHash} />
      <AddedFilesContainer hash={hash} />
    </>
  );
};

export default Commit;
