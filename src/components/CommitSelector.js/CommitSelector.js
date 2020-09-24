import React from "react";

const CommitSelector = ({
  ids,
  hashIndex,
  currentHash,
  prevHash,
  incrementHashIndex,
  hashhIndexGoTo,
}) => {
  return (
    <div>
      <div>
        hashIndex: {hashIndex} {currentHash}
      </div>
      <select name="hashes" id="hashes" value={currentHash}>
        {ids.map((id, index) => {
          return (
            <option
              key={id}
              value={id}
              onClick={(e) => {
                const index = e.target.index;
                hashhIndexGoTo(index);
              }}
            >
              {id}
            </option>
          );
        })}
      </select>
      <h1>Current Commit: {currentHash}</h1>
      <div>Previous Commit: {prevHash}</div>
      <button
        onClick={incrementHashIndex}
        disabled={hashIndex === ids.length - 1 ? true : false}
      >
        Next Commit
      </button>
    </div>
  );
};

export default CommitSelector;
