import { CommitSelector } from "../components";
import { connect } from "react-redux";
import { incrementHashIndex } from "../actions/hash-actions";

const mapDispatchToProps = { incrementHashIndex };
const mapStateToProps = (state) => {
  const { hashIndex, prevHashIndex } = state.hashes;
  return {
    currentHash: state.commits.ids[hashIndex],
    prevHash: state.commits.ids[prevHashIndex],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommitSelector);
