import { Commit } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { hashIndex } = state.hashes;
  const hash = state.commits.ids[hashIndex];
  const data = state.commits.commits[hash];
  return {
    hash,
    data,
  };
};

export default connect(mapStateToProps, null)(Commit);
