import React, { useState, useEffect } from "react";
import { DiffEditor as MonacoDiffEditor } from "@monaco-editor/react";
import { file as fileUtils } from "../../utils";
import examples from "../../config/diff";

import { ThemeContext } from "../../ThemeContext";

import useStyles from "./useStyles";
import axios from "axios";

const DiffEditor = ({
  modifiedFilePath,
  originalFilePath,
  original,
  modified,
}) => {
  const [originalText, setOriginalText] = useState(null);
  const [modifiedText, setModifiedText] = useState(null);

  useEffect(() => {
    axios
      .all([axios.get(modifiedFilePath), axios.get(originalFilePath)])
      .then((values) => {
        debugger;
        if (typeof values[0].data == "object") {
          setModifiedText(fileUtils.objectToString(values[0].data));
          console.log("f1");
        } else {
          setModifiedText(values[0].data);
        }

        if (typeof values[1].data == "object") {
          setOriginalText(fileUtils.objectToString(values[1].data));
          console.log("f2");
        } else {
          setOriginalText(values[1].data);
        }
        console.log(values[1]);
        debugger;
      });
  }, []);

  const { isDarkMode } = React.useContext(ThemeContext);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MonacoDiffEditor
        // options={{ renderSideBySide: false }}
        theme={isDarkMode ? "dark" : "light"}
        original={originalText || examples.original}
        modified={modifiedText || examples.modified}
        language={"markdown"}
      />
    </div>
  );
};

export default DiffEditor;
