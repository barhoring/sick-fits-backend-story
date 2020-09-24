import { DiffEditor } from "../components";
import { connect } from "react-redux";

const mapStateToProps = (state, ownnProps) => {
  const { hash } = ownnProps;
  return {
    original: "original",
    modified: "modified",
  };
};

export default connect(mapStateToProps, null)(DiffEditor);
