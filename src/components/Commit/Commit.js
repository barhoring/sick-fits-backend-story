import React from "react";
import Created from "../../components/Created";
import { AddedFilesContainer } from "../../containers";
import CommitStats from "../CommitStats";

import { ModifiedContainer } from "../../containers";

const Commit = ({ hash, data }) => {
  const {
    filesAdded,
    filesModify,
    filesDeleted,
    filesRenamed,
    authorName,
  } = data;

  const numFilesAdded = filesAdded.length;
  const numFilesModified = filesModify.length;
  const numFilesDeleted = filesDeleted.length;
  const numFilesRenamed = filesRenamed.length;
  const stats = {
    numFilesAdded,
    numFilesModified,
    numFilesDeleted,
    numFilesRenamed,
  };

  return (
    <>
      <CommitStats {...{ ...data, hash, authorName }} />
      <ModifiedContainer />
      <AddedFilesContainer {...{ hash }} />
      {/* <Created hash={hash} fileNames={filesAdded} /> */}
    </>
  );
};

export default Commit;
