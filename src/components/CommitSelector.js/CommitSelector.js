import React from "react";

const CommitSelector = ({ ids, currentHash, prevHash, incrementHashIndex }) => {
  return (
    <div>
      <select name="hashes" id="hashes">
        {ids.map((id) => {
          return (
            <option
              key={id}
              value={id}
              onClick={(e) => {
                console.log(incrementHashIndex);
                console.log(e.target.value);
              }}
            >
              {id}
            </option>
          );
        })}
      </select>
      <h1>Current Commit: {currentHash}</h1>
      <div>Previous Commit: {prevHash}</div>
      <button onClick={incrementHashIndex}>Next Commit</button>
    </div>
  );
};

export default CommitSelector;
