import { CommitView } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  debugger;
  const { hashIndex } = state.hashes;
  const hash = state.hashes.ids[hashIndex];
  return { hash };
};

export default connect(mapStateToProps)(CommitView);
