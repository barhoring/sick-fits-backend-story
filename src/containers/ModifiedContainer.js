import { ModifiedFiles } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const { commitId, hash } = ownProps; 
  const data = state.commits.commits[hash];
  const { filesModify } = data;
  return {
    filesModified: filesModify,
    commitId
  };
};

export default connect(mapStateToProps, null)(ModifiedFiles);
