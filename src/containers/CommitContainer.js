import { Commit } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { hashIndex } = state.hashes;
  const hash = state.hashes.ids[hashIndex];
  const data = state.hashes.ids[hash];
  return {
    hash,
    data,
  };
};

export default connect(mapStateToProps, null)(Commit);
