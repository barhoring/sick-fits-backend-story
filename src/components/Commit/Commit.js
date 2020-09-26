import React from "react";
import Created from "../../components/Created";
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
  return (
    <>
      <h1>by {authorName}</h1>
      <h3>Commit {hash}</h3>
      <CommitStats />
      <div>{filesAdded.length} files added</div>
      <div>{filesModify.length} files modified</div>
      <div>{filesDeleted.length} files deleted</div>
      <div>{filesRenamed.length} files renamed</div>
      <hr />
      {/* <Created /> */}
      <ModifiedContainer />
      <Created hash={hash} fileNames={filesAdded} />
    </>
  );
};

export default Commit;
