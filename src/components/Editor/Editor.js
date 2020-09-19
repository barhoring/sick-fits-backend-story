import React, { useEffect, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import axios from "axios";

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
      <h3>{getFileName(filePath)}</h3>
      <div style={styles.root}>
        Editor
        <MonacoEditor
          style={styles.editor}
          value={text || ""}
          language={getLanguage(filePath)}
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

// This code is more readable with if than switch IMO
const getLanguage = (file) => {
  const ext = getExt(file);
  if (ext === "js") return "javascript";
  if (ext === "json") return "json";
  if (ext === "gitignore") return "gitignore";
  if (ext === "html") return "html";
  if (ext === "css") return "css";
  if (ext === "md") return "markdown";
  return "text";
};

const getExt = (file) => {
  const index = file.lastIndexOf(".");
  const ext = file.substring(index + 1, file.length);
  return ext;
};

const getFileName = (file) => {
  const index = file.lastIndexOf("/");
  const name = file.substring(index + 1, file.length);
  return name;
};

export default Editor;
