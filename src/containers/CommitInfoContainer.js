import { CommitInfo } from "../components";
import { connect } from "react-redux";
import { file as fileUtils } from "../utils";

const mapStateToProps = (state, ownProps) => {
  debugger;
  const { hash } = ownProps;
  // const hash = state.hashes.ids[hashIndex];
  debugger;
  const data = state.commits.commits[hash];
  // const data = state.commits.commits[hash];
  const commitGithubLink = fileUtils.getGithubCommitLink(hash);
  // const commitGithubLink = fileUtils.getGithubCommitLink(hash);
  return {
    hash,
    commitGithubLink,
    authorName: data.authorName,
    filesAdded: data.filesAdded,
    filesModify: data.filesModify,
    filesDeleted: data.filesDeleted,
    filesRenamed: data.filesRenamed,
  };
};

export default connect(mapStateToProps)(CommitInfo);
