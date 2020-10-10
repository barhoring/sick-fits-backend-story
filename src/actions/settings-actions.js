const SET_THEME = "SET_THEME";
const ADD_THEME = "ADD_THEME";

export const setTheme = (theme) => {
  return {
    type: SET_THEME,
    payload: { theme },
  };
};

export const addTheme = (theme) => {
  return {
    type: ADD_THEME,
    payload: { theme },
  };
};
