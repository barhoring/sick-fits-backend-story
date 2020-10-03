import { AddedFiles } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const { hash } = ownProps;
  debugger;
  return {
    files: state.commits.commits[hash].filesAdded,
  };
};

export default connect(mapStateToProps)(AddedFiles);
