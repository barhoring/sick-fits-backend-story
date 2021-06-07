import { connect } from 'react-redux';
import { Editor } from '../components';
import { file as fileUtils } from '../utils';

const mapStateToProps = (state, ownProps) => {
  const { hash, fileName } = ownProps;
  const { theme } = state.settings;
  const githubLink = fileUtils.getGithubCommitLink(hash, fileName);
  const filePath = fileUtils.getFileUri(hash, fileName);

  return {
    hash,
    githubLink,
    filePath,
    theme,
  };
};

export default connect(mapStateToProps)(Editor);
