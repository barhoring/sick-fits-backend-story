import { CommitView } from "../components";
import { connect } from "react-redux";
import { redirectTo, navigate } from "@reach/router"


const mapStateToProps = (state, ownProps) => {
  const firstHash  = state.hashes.ids[0];
  const { commit_hash: hash } = ownProps; 

  // calc data : prevHash, nextHash
  // const hash = hash_tmp || firstHash;
  debugger;
  if (!hash) {
    const { next, prev }  = state.hashes.prevHashMapping[firstHash];
    navigate(`/commits/a6d5b6824251cded54b2ab5c8065545d6fc2476e`);
    return { hash: firstHash, prevHash: prev, nextHash: next  }
  }
  const { next, prev }  = state.hashes.prevHashMapping[hash];
  return { hash, prevHash: prev, nextHash: next  };
};

export default connect(mapStateToProps)(CommitView);
