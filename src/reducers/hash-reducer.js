const defaultState = {
  hashIndex: 0,
  prevHashIndex: null,
};
const hashReducer = (state = defaultState, action) => {
  if (action.type === "HASH_INDEX_INCREMENT") {
    return {
      hashIndex: state.hashIndex + 1,
      prevHashIndex: state.hashIndex,
    };
  }
  return state;
};

export default hashReducer;
