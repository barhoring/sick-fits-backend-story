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
  if (action.type === "HASH_INDEX_GOTO") {
    const { index } = action.payload;
    const prevHashIndex = index - 1 > -1 ? index : null;
    return {
      hashIndex: index,
      prevHashIndex,
    };
  }
  return state;
};

export default hashReducer;
