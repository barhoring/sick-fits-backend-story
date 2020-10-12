import defaultSettings from "./defaultSettings.json";

const settingsReducer = (state = defaultSettings, action) => {
  if (action.type === "SET_THEME") {
    const { theme } = action.payload;
    return { ...state, theme };
    // console.log("set theme");
  }
  if (action.type === "ADD_THEME") {
    const theme = action.payload.theme;
    const downloadedThemes = [...state.downloadedThemes, theme];
    return { ...state, downloadedThemes };
  }
  return state;
};

export default settingsReducer;
