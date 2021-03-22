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
    currentHash: state.hashes.ids[hashIndex],
    prevHash: state.hashes.ids[prevHashIndex],
    hashIndex,
    ids: state.hashes.ids,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommitSelector);
