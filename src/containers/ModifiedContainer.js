import { ModifiedFiles } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { hashIndex } = state.hashes;
  const hash = state.hashes.ids[hashIndex];
  const prevHash = state.hashes.ids[hashIndex - 1];
  const data = state.commits.commits[hash];
  const { filesModify } = data;
  return {
    hash,
    prevHash,
    filesModified: filesModify,
  };
};

export default connect(mapStateToProps, null)(ModifiedFiles);
