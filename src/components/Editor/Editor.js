import React, { useEffect, useState, useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import axios from "axios";

const Editor = ({ filePath }) => {
  const [text, setText] = useState(null);
  // fetch the file from raw github
  let isRendered = useRef(false);
  useEffect(() => {
    isRendered = true;
    axios
      .get(filePath, { responseType: "text/plain" }, { responseType: "text" })
      .then(function (response) {
        // handle success
        if (isRendered) {
          if (typeof response.data == "object") {
            debugger;
            const unEscpaed = JSON.stringify(response.data).replace(/\"/g, `"`);
            debugger;
            setText(unEscpaed);
            console.log("here");
          } else {
            setText(response.data);
          }
        }
      })
      .catch(function (error) {
        // handle error
        console.log("Error occured during axios request");
        console.log(error);
      })
      .then(function () {
        // always executed
        console.log("End of axios request");
      });
  }, []);
  if (typeof text == "object") {
    console.log("fuck");
    console.log(text);
  }
  return (
    <>
      <div style={styles.root}>
        Editor
        <MonacoEditor
          style={styles.editor}
          value={text || ""}
          // to do: change language to extracted from file type
          language={"json"}
        />
      </div>
    </>
  );
};

const styles = {
  root: {
    width: "90%",
    height: "100vh",
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
  },
};

export default Editor;
