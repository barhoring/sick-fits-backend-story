import React from "react";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core/";
import useStyles from "./useStyles";
import CommitNavButton from "./CommitNavButton";

const CommitSelector = ({
  ids,
  hashIndex,
  currentHash,
  incrementHashIndex,
  decrementHashIndex,
  hashSet,
}) => {
  const classes = useStyles();
  return (
    <div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          // width: "80%",
          justifyContent: "center",
        }}
        className={classes.root}
      >
        <CommitNavButton
          onClick={decrementHashIndex}
          disabled={hashIndex === 0 ? true : false}
        >
          Previous Commit
        </CommitNavButton>

        <FormControl className={classes.formControl}>
          <InputLabel id="commit-selector-label" style={{ fontSize: "2rem" }}>
            Commit
          </InputLabel>
          <Select
            labelId="commit-selector-label"
            id="demo-simple-select-helper"
            value={currentHash}
            onChange={(e) => {
              hashSet(e.target.value);
            }}
          >
            {ids?.map((id, index) => {
              return (
                <MenuItem index={index} value={id}>
                  {id.slice(0, 10)}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText>Chose commit to view</FormHelperText>
        </FormControl>

        <CommitNavButton
          onClick={incrementHashIndex}
          disabled={hashIndex === ids.length - 1 ? true : false}
        >
          Next Commit
        </CommitNavButton>
      </div>
    </div>
  );
};

export default CommitSelector;
