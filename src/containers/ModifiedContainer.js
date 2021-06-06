import { ModifiedFiles } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const { hashIndex } = state.hashes;
  const hash = state.hashes.ids[hashIndex];
  const { commitId } = ownProps; 
  // const hash = state.hashes.ids[hashIndex];
  // const prevHash = state.hashes.prevHashMapping[commitId].prev;
  debugger;
  const { prevHash } = state.hashes;
  // const prevHash = state.hashes.ids[hashIndex - 1];
  const data = state.commits.commits[commitId];
  const { filesModify } = data;
  return {
    hash: commitId,
    prevHash,
    filesModified: filesModify,
    commitId
  };
};

export default connect(mapStateToProps, null)(ModifiedFiles);
