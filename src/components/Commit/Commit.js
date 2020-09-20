import React from "react";
import { connect } from "react-redux";
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

// Baded on hash prop get the data for this commit
function mapStateToProps(state, ownProps) {
  const { hash } = ownProps;
  return { data: state.commits[hash] };
}

export default connect(mapStateToProps)(Commit);
