import { Editor } from "../components";
import { connect } from "react-redux";
import { file as fileUtils } from "../utils";

const mapStateToProps = (state, ownProps) => {
  const { hash, fileName } = ownProps;
  const githubLink = fileUtils.getGithubCommitLink(hash, fileName);
  const filePath = fileUtils.getFileUri(hash, fileName);

  return {
    hash,
    githubLink,
    filePath,
  };
};

export default connect(mapStateToProps)(Editor);
