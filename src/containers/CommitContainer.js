import { Commit } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const { hash } = ownProps;
  const data = state.hashes.ids[hash]; 
  const { prevHash, nextHash } = state.hashes;
  return {
    hash,
    prevHash,
    nextHash
  };
};

export default connect(mapStateToProps, null)(Commit);
