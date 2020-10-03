import { AddedFiles } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  //   const { hash } = ownProps;
  const { hashIndex } = state.hashes;
  const hash = state.hashes.ids[hashIndex];
  debugger;
  return {
    hash,
    files: state.commits.commits[hash].filesAdded,
  };
};

export default connect(mapStateToProps)(AddedFiles);
