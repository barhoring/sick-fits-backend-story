const HASH_INDEX_INCREMENT = "HASH_INDEX_INCREMENT";
export const setHashIndex = (index) => {};

export const incrementHashIndex = () => {
  return {
    type: HASH_INDEX_INCREMENT,
  };
};
