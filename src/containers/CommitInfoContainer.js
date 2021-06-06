import { CommitInfo } from "../components";
import { connect } from "react-redux";
import { file as fileUtils } from "../utils";

const mapStateToProps = (state, ownProps) => {
  const { commitId } = ownProps;
  const { hashIndex } = state.hashes;
  const hash = state.hashes.ids[hashIndex];
  const data = state.commits.commits[commitId];
  // const data = state.commits.commits[hash];
  const commitGithubLink = fileUtils.getGithubCommitLink(commitId);
  // const commitGithubLink = fileUtils.getGithubCommitLink(hash);
  return {
    hash: commitId,
    commitGithubLink,
    authorName: data.authorName,
    filesAdded: data.filesAdded,
    filesModify: data.filesModify,
    filesDeleted: data.filesDeleted,
    filesRenamed: data.filesRenamed,
  };
};

export default connect(mapStateToProps)(CommitInfo);
