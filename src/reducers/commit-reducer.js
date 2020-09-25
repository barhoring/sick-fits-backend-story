import state from "../defaultState.json";

const commitReducer = (commits = state, action) => {
  console.log("bar horing amir!");
  if (action.type === "HASH_SET") {
    debugger;
    const { hash, hashIndex, prevHashIndex } = action.payload;
    const { ids } = state.commits;
    return {
      currentHash: hash,
      hashIndex,
      prevHashIndex,
    };
  }

  return state;
};

export default commitReducer;
