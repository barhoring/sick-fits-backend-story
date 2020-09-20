import React, { useEffect, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import axios from "axios";
import { file as fileUtils } from "../../utils";

const Editor = ({ filePath }) => {
  const [text, setText] = useState(null);
  // fetch the file from raw github

  const config = {
    headers: {
      "Content-Length": 0,
      "Content-Type": "text/plain",
    },
    responseType: "text",
  };

  useEffect(() => {
    axios
      .get(filePath, config)
      .then(function (response) {
        // handle success
        if (typeof response.data == "object") {
          // A bug in axios returns an object even when config sets response type for text
          // This is why in the next line we turn the object into a string
          const stringObject = JSON.stringify(response.data, null, "\t");
          setText(stringObject);
        } else {
          setText(response.data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log("Error occured during axios request!");
        console.log(error);
      })
      .then(function () {
        // always executed
        console.log("End of axios request");
      });
  }, []);

  return (
    <>
      <h2>{fileUtils.getFileName(filePath)}</h2>
      <h3>{filePath}</h3>
      <div style={styles.root}>
        Editor
        <MonacoEditor
          // style={styles.editor}
          value={text || ""}
          theme="dark"
          language={fileUtils.getLanguage(filePath)}
        />
      </div>
    </>
  );
};

const styles = {
  root: {
    width: "90%",
    height: "80vh",
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
  },
};

export default Editor;
