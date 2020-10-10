import React from "react";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core/";
// import useStyles from "./useStyles";
import monacoThemes from "monaco-themes/themes/themelist";

const ThemeList = () => {
  return (
    <FormControl>
      {/* <FormControl className={classes.formControl}> */}
      <InputLabel id="commit-selector-label" style={{ fontSize: "2rem" }}>
        Commit
      </InputLabel>
      <Select
        labelId="commit-selector-label"
        id="demo-simple-select-helper"
        // value={currentHash}
        onChange={(e) => {
          alert(e.target.value);
        }}
      >
        {Object.keys(monacoThemes).map((id, index) => {
          return (
            <MenuItem index={index} value={monacoThemes[id]}>
              {monacoThemes[id]}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>Chose commit to view</FormHelperText>
    </FormControl>
  );
};

export default ThemeList;
