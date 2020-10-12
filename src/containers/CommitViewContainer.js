import { CommitView } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  console.log("ownProps", ownProps);
  //   const { commitHash } = ownProps;
  const { isMenuOpen } = ownProps;
  debugger;
  return { ...state, isMenuOpen };
};

export default connect(mapStateToProps)(CommitView);
