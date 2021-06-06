import { Commit } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const { hash, prevHash } = ownProps;
  const { nextHash } = state.hashes;
  return {
    hash,
    prevHash,
    nextHash
  };
};

export default connect(mapStateToProps, null)(Commit);
