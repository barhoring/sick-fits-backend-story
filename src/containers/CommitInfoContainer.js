import { CommitInfo } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const { hashIndex } = state.hashes;
  const hash = state.hashes.ids[hashIndex];
  const data = state.commits.commits[hash];
  debugger;
  return {
    hash,
    authorName: data.authorName,
    filesAdded: data.filesAdded,
    filesModify: data.filesModify,
    filesDeleted: data.filesDeleted,
    filesRenamed: data.filesRenamed,
  };
};

export default connect(mapStateToProps)(CommitInfo);
