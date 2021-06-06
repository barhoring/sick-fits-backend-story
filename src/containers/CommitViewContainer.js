import { CommitView } from "../components";
import { connect } from "react-redux";


const mapStateToProps = (state, ownProps) => {
  // import { useNavigate } from "@reach/router";
  // const navigate = useNavigate();
  const { hashIndex } = state.hashes;
  const firstHash  = state.hashes.ids[0];
  const { commit_hash } = ownProps; 
  if (!commit_hash) {
    ownProps.navigate(`/commits/${firstHash}`)
  }
  const hash = state.hashes.ids[hashIndex];
  // const firstHash = state.hashes.ids[0];
  return { hash: commit_hash, firstHash  };
};

export default connect(mapStateToProps)(CommitView);
