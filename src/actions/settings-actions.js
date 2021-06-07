const SET_THEME = "SET_THEME"
const ADD_THEME = "ADD_THEME"
const SET_DIFF_EDITOR_RENDER_SIDE_BY_SIDE = "SET_DIFF_EDITOR_RENDER_SIDE_BY_SIDE"

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: { theme },
})

export const addTheme = (theme) => ({
  type: ADD_THEME,
  payload: { theme },
})

export const setDiffEditorRenderSideBySide = (value) => ({
  type: SET_DIFF_EDITOR_RENDER_SIDE_BY_SIDE,
  payload: {
    value,
  },
})
