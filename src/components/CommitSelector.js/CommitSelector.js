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
import { Link } from "@reach/router";
import { navigate } from "@reach/router"
import { redirectTo } from "@reach/router"


const CommitSelector = ({
  gotoHash,
  commitId,
  ids,
  hashIndex,
  currentHash,
  incrementHashIndex,
  decrementHashIndex,
  hashSet,
  isFirstCommit,
  isLastCommit,
  nextCommitId,
  prevCommitId,
  prevHash,
  nextHash,
  thisHash
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
      <Link to={`/commits/${prevHash}`}>
        <CommitNavButton
          // onClick={decrementHashIndex}
          disabled={isFirstCommit}
          // disabled={hashIndex === 0 ? true : false}
        >
          Previous Commit
        </CommitNavButton>
      </Link>

        <FormControl className={classes.formControl}>
          <InputLabel id="commit-selector-label" style={{ fontSize: "2rem" }}>
            Commit
          </InputLabel>
          <Select
            labelId="commit-selector-label"
            id="demo-simple-select-helper"
            value={currentHash || thisHash}
            // onChange={(e) => {
            //   const { value } = e.target;
            //   gotoHash(value);
            //   // hashSet(e.target.value);
            // }}
            onChange={event => {
              debugger;
              const { value } = event.target;
              redirectTo(`/commits/${value}`);
              // navigate(`/commits/${value}`)
             }}
          >
            {ids?.map((id, index) => {
              return (
                <MenuItem key={id} index={index} value={id}>
                  {id.slice(0, 10)}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText>Chose commit to view</FormHelperText>
        </FormControl>
        <Link to={`/commits/${nextHash}`}>
          <CommitNavButton
            // onClick={incrementHashIndex}
            disabled={isLastCommit}
            // disabled={hashIndex === ids.length - 1 ? true : false}
          >
            Next Commit
          </CommitNavButton>
        </Link>
      </div>
    </div>
  );
};

export default CommitSelector;
