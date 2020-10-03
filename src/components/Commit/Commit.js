import React from "react";
import { AddedFilesContainer, CommitInfoContainer } from "../../containers";

import { ModifiedContainer } from "../../containers";

const Commit = ({ hash, data }) => {
  return (
    <>
      <CommitInfoContainer />
      <ModifiedContainer />
      <AddedFilesContainer />
    </>
  );
};

export default Commit;
