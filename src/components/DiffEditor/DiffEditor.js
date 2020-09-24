import React, { useState, useEffect } from "react";
import { DiffEditor as MonacoDiffEditor } from "@monaco-editor/react";
import { file as fileUtils } from "../../utils";
import examples from "../../config/diff";

import { ThemeContext } from "../../ThemeContext";

import useStyles from "./useStyles";
import axios from "axios";

const DiffEditor = ({ modifiedFilePath, originalFilePath }) => {
  const [original, setOriginal] = useState(null);
  const [modified, setModified] = useState(null);

  useEffect(() => {
    axios.all([modifiedFilePath, originalFilePath]).then((values) => {
      console.log(values);
    });
  }, []);

  const { isDarkMode } = React.useContext(ThemeContext);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MonacoDiffEditor
        theme={isDarkMode ? "dark" : "light"}
        original={original || examples.original}
        modified={modified || examples.modified}
        language={"markdown"}
      />
    </div>
  );
};

export default DiffEditor;
