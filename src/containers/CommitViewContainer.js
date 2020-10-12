import { CommitView } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(CommitView);
