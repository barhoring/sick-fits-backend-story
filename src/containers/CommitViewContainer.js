import { CommitView } from "../components";
import { connect } from "react-redux";


const mapStateToProps = (state, ownProps) => {
  // import { useNavigate } from "@reach/router";
  // const navigate = useNavigate();
  const { hashIndex } = state.hashes;
  const firstHash  = state.hashes.ids[0];
  const { commit_hash: hash_tmp } = ownProps; 

  // calc data : prevHash, nextHash
  debugger;
  const hash = hash_tmp || firstHash;
  const { next, prev}  = state.hashes.prevHashMapping[hash];
  if (!hash) {
    ownProps.navigate(`/commits/${firstHash}`)
  }
  // const hash = state.hashes.ids[hashIndex];
  // const firstHash = state.hashes.ids[0];
  return { hash, firstHash, prevHash: prev, nextHash: next  };
};

export default connect(mapStateToProps)(CommitView);
