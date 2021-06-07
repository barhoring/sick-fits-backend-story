import { connect } from 'react-redux';
import { CommitSelector } from '../components';

const mapStateToProps = (state, ownProps) => {
  const {
    hash,
    prevHash,
    nextHash,
  } = ownProps;

  return {
    currentHash: hash,
    nextHash,
    prevHash,
    ids: state.hashes.ids,
  };
};

export default connect(mapStateToProps, {})(CommitSelector);
