import { ThemeSelect } from "../components/Layout/Settings";
import { connect } from "react-redux";
import { addTheme, setTheme } from "../actions/settings-actions";

const mapStateToProps = (state) => {
  const settings = state.settings;
  return {
    settings,
  };
};

const mapDispatchToProps = { addTheme, setTheme };

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSelect);
