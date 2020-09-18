import React from "react";
import { connect } from "react-redux";
import Created from "../../components/Created";

const Commit = ({ hash, data }) => {
  const { filesAdded, authorName } = data;
  return (
    <>
      Commit<div>{JSON.stringify(data)}</div>
      <h2>by {authorName}</h2>
      <h5>{hash}</h5>
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
