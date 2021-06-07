import { connect } from 'react-redux';
import { AddedFiles } from '../components';

const mapStateToProps = (state, ownProps) => {
  const { hash } = ownProps;
  const files = state.commits.commits[hash].filesAdded;
  return {
    hash,
    files,
  };
};

export default connect(mapStateToProps)(AddedFiles);
