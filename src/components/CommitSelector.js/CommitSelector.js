import React from "react";
import {
  Button,
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
  decrementHashIndex,
  hashhIndexGoTo,
  hashSet,
}) => {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel
          id="demo-simple-select-helper-label"
          style={{ fontSize: "2rem" }}
        >
          Commit
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={currentHash}
          onChange={(e) => {
            hashSet(e.target.value);
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
      <div className={classes.root}>
        <Button
          onClick={decrementHashIndex}
          disabled={hashIndex === 0 ? true : false}
          color="primary"
          variant="contained"
        >
          Previous Commit
        </Button>
        <Button
          onClick={incrementHashIndex}
          disabled={hashIndex === ids.length - 1 ? true : false}
          color="primary"
          variant="contained"
        >
          Next Commit
        </Button>
      </div>
    </div>
  );
};

export default CommitSelector;
