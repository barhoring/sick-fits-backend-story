import React from "react";

const CommitSelector = ({ ids }) => {
  return (
    <select name="hashes" id="hashes">
      {ids.map((id) => {
        return (
          <option
            key={id}
            value={id}
            onClick={(e) => console.log(e.target.value)}
          >
            {id}
          </option>
        );
      })}
    </select>
  );
};

export default CommitSelector;
