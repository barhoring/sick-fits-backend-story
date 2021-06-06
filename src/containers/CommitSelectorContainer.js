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
  decrementHashIndex,
};
const mapStateToProps = (state, ownProps) => {
  const { hashIndex, prevHashIndex,
    thisHash,
    prevHash,
    nextHash,
  } = state.hashes;
  console.dir({thisHash, prevHash, nextHash});
  const { commitId } = ownProps;
  console.log(state);
  // const prevCommitId = state.hashes.prevHashMapping[commitId]?.prev;
  // const nextCommitId = state.hashes.prevHashMapping[commitId]?.next;
  // const isFirstCommit = prevCommitId === null;
  // const isLastCommit = nextCommitId === null;
  return {
    currentHash: thisHash,
    // currentHash: state.hashes.ids[hashIndex],
    prevHash,
    // prevHash: state.hashes.ids[prevHashIndex],
    hashIndex,
    // nextCommitId,
    // prevCommitId,
    ids: state.hashes.ids,
    isFirstCommit: false,
    isLastCommit: false
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommitSelector);
