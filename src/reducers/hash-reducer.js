import defaultState from "../hashDefaultState.json";

const hashReducer = (state = defaultState, action) => {
  debugger;
  if (action.type === "HASH_INDEX_INCREMENT") {
    return {
      hashIndex: state.hashIndex + 1,
      prevHashIndex: state.hashIndex,
      ids: state.ids,
    };
  }
  if (action.type === "HASH_INDEX_DECREMENT") {
    return {
      hashIndex: state.hashIndex - 1,
      prevHashIndex: state.hashIndex,
      ids: state.ids,
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
  if (action.type === "HASH_SET") {
    const { hash } = action.payload;

    const { ids } = state;
    let newIndex = null;
    for (const [i, value] of ids.entries()) {
      console.log("%d: %s", i, value);
      if (value === hash) {
        newIndex = i;
        console.log("found!");
      }
    }
    return {
      ids,
      hashIndex: newIndex,
      prevHashIndex: newIndex - 1,
    };
  }

  return state;
};

export default hashReducer;
