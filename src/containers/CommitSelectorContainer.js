import { CommitSelector } from "../components";
import { connect } from "react-redux";
import {
  incrementHashIndex,
  decrementHashIndex,
  hashhIndexGoTo,
  hashSet,
} from "../actions/hash-actions";

const mapDispatchToProps = {
  incrementHashIndex,
  hashhIndexGoTo,
  hashSet,
  decrementHashIndex,
};
const mapStateToProps = (state) => {
  const { hashIndex, prevHashIndex } = state.hashes;
  return {
    currentHash: state.commits.ids[hashIndex],
    prevHash: state.commits.ids[prevHashIndex],
    hashIndex,
    ids: state.commits.ids,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommitSelector);
