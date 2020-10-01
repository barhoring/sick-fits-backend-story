const HASH_INDEX_INCREMENT = "HASH_INDEX_INCREMENT";
const HASH_INDEX_DECREMENT = "HASH_INDEX_DECREMENT";
const HASH_INDEX_GOTO = "HASH_INDEX_GOTO";
const HASH_SET = "HASH_SET";

export const incrementHashIndex = () => {
  return {
    type: HASH_INDEX_INCREMENT,
  };
};

export const decrementHashIndex = () => {
  return {
    type: HASH_INDEX_DECREMENT,
  };
};

export const hashhIndexGoTo = (index) => {
  return {
    type: HASH_INDEX_GOTO,
    payload: { index },
  };
};

export const hashSet = (hash) => {
  return {
    type: HASH_SET,
    payload: {
      hash,
    },
  };
};
