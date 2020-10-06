import { CommitView } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  console.log("ownProps", ownProps);
  //   const { commitHash } = ownProps;
  return state;
};

export default connect(mapStateToProps)(CommitView);
