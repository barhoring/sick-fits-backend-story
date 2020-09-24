import React from "react";
import Created from "../../components/Created";
import DiffEditor from "../../components/DiffEditor";

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
      Commit<div>{JSON.stringify(data)}</div>
      <h1>by {authorName}</h1>
      <h3>Commit {hash}</h3>
      <div>{filesAdded.length} files added</div>
      <div>{filesModify.length} files modified</div>
      <div>{filesDeleted.length} files deleted</div>
      <div>{filesRenamed.length} files renamed</div>
      <hr />
      <div style={{ height: "100vh" }}>
        <DiffEditor />
      </div>
      <Created hash={hash} fileNames={filesAdded} />
    </>
  );
};

export default Commit;
