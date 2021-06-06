import { AddedFiles } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  //   const { hash } = ownProps;
  // const { hashIndex } = state.hashes;
  // const hash = state.hashes.ids[hashIndex];
  const { hash } = ownProps;
  console.log("hash: ", hash);
  const files = state.commits.commits[hash].filesAdded;
  return {
    hash,
    files,
    // files: state.commits.commits[hash].filesAdded,
  };
};

export default connect(mapStateToProps)(AddedFiles);
