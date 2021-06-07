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


const CommitSelector = ({
  ids,
  currentHash,
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
          justifyContent: "center",
        }}
        className={classes.root}
      >
      <Link to={`/commits/${prevHash}`} className={!prevHash ? classes.disabledLink : null}>
        <CommitNavButton
          disabled={!prevHash}
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
            onChange={event => {
              debugger;
              const { value } = event.target;
              navigate(`/commits/${value}`, { replace: true});
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
        <Link to={`/commits/${nextHash}`} className={!nextHash ? classes.disabledLink : null}>
        {/* <Link to={nextHash ? `/commits/${nextHash}` : '/'}  className={!nextHash ? classes.disabledLink : null}> */}
          <CommitNavButton
            disabled={!nextHash}
          >
            Next Commit
          </CommitNavButton>
        </Link>
      </div>
    </div>
  );
};

export default CommitSelector;
