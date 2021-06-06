import { CommitSelector } from "../components";
import { connect } from "react-redux";
import {
  incrementHashIndex,
  decrementHashIndex,
  hashhIndexGoTo,
  hashSet,
} from "../actions/hash-actions";

import { navigate } from "@reach/router"

const gotoHash = (hash) => {
  navigate(`/commits/${hash}`)
}

const mapDispatchToProps = {
  incrementHashIndex,
  hashhIndexGoTo,
  hashSet,
  gotoHash,
  decrementHashIndex,
};
const mapStateToProps = (state, ownProps) => {
  const { hashIndex, prevHashIndex,
  } = state.hashes;

  const {
    hash,
    prevHash,
    nextHash,
  } = ownProps;
  
  // fetch hash from uri 
  console.dir({hash, prevHash, nextHash});
  console.log(state);
  return {
    currentHash: hash,
    nextHash,
    prevHash,
    hashIndex,
    ids: state.hashes.ids,
    isFirstCommit: false,
    isLastCommit: false
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommitSelector);
