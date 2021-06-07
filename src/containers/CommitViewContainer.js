import { CommitView } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const firstHash  = state.hashes.ids[0];
  const { commit_hash: hash } = ownProps; 

  if (!hash) {
    const { next, prev }  = state.hashes.prevHashMapping[firstHash];
    return { prevHash: prev, nextHash: next };
  }
  const { next, prev }  = state.hashes.prevHashMapping[hash];
  return { hash, prevHash: prev, nextHash: next  };
};

export default connect(mapStateToProps)(CommitView);
