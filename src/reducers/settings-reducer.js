import defaultSettings from './defaultSettings.json';

const settingsReducer = (state = defaultSettings, action) => {
  if (action.type === 'SET_THEME') {
    const { theme } = action.payload;
    return { ...state, theme };
    // console.log("set theme");
  }
  if (action.type === 'ADD_THEME') {
    const { theme } = action.payload;
    const downloadedThemes = [...state.downloadedThemes, theme];
    return { ...state, downloadedThemes };
  }

  if (action.type === 'SET_DIFF_EDITOR_RENDER_SIDE_BY_SIDE') {
    const renderSideBySide = action.payload.value;
    return { ...state, renderSideBySide };
  }

  return state;
};

export default settingsReducer;
