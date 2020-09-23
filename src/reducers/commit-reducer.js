import state from "../defaultState.json";

const commitReducer = (commits = state) => {
  console.log("bar horing amir!");
  return state;
};

export default commitReducer;
