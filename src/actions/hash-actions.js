const HASH_INDEX_INCREMENT = "HASH_INDEX_INCREMENT";
const HASH_INDEX_GOTO = "HASH_INDEX_GOTO";

export const incrementHashIndex = () => {
  return {
    type: HASH_INDEX_INCREMENT,
  };
};

export const hashhIndexGoTo = (index) => {
  return {
    type: HASH_INDEX_GOTO,
    payload: { index },
  };
};
