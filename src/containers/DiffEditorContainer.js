import { DiffEditor } from "../components";
import { connect } from "react-redux";
import { file as fileUtils } from "../utils";

const mapStateToProps = (state, ownnProps) => {
  const { hash, prevHash, fileName } = ownnProps;
  const modifiedFilePath = fileUtils.getFileUri(hash, fileName);
  const originalFilePath = fileUtils.getFileUri(prevHash, fileName);
  const githubLink = fileUtils.getGithubCommitLink(hash, fileName);
  const { theme } = state.settings;
  return {
    modifiedFilePath,
    originalFilePath,
    githubLink,
    theme,
  };
};

export default connect(mapStateToProps, null)(DiffEditor);
