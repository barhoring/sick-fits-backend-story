import React, { useEffect, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import axios from "axios";

const Editor = ({ filePath }) => {
  const [text, setText] = useState(null);
  // fetch the file from raw github
  useEffect(() => {
    axios
      .get(filePath)
      .then(function (response) {
        // handle success
        setText(response.data);
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
  return (
    <>
      <div style={styles.root}>
        Editor
        <MonacoEditor
          style={styles.editor}
          value={text || ""}
          // to do: change language to extracted from file type
          language={"javascript"}
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
