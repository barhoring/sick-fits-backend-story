import state from "../defaultState.json";

const rootReducer = (commits = state) => {
  return state;
};

export default rootReducer;
