import { connect } from 'react-redux';
import { Settings } from '../components';
import { setDiffEditorRenderSideBySide } from '../actions/settings-actions';

const mapStateToProps = (state) => {
  const { renderSideBySide } = state.settings;
  return {
    renderSideBySide,
  };
};
const mapDispatchToProps = { setDiffEditorRenderSideBySide };
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
