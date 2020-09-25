import React from "react";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core/";
import useStyles from "./useStyles";

const CommitSelector = ({
  ids,
  hashIndex,
  currentHash,
  prevHash,
  incrementHashIndex,
  hashhIndexGoTo,
  hashSet,
}) => {
  const classes = useStyles();
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

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={hashIndex}
          onChange={(e) => {
            hashSet(e.target.value);
            console.log(e);
            debugger;
          }}
        >
          {ids.map((id, index) => {
            return (
              <MenuItem index={index} value={id}>
                {id.slice(0, 10)}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>

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
