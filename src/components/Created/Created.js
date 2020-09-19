import React from "react";
import Editor from "../Editor";

const Created = ({ fileNames, hash }) => {
  return (
    <>
      {fileNames &&
        fileNames.map((file) => {
          const filePath = getFileUri(hash, file);
          return <Editor filePath={filePath} />;
        })}
    </>
  );
};

const uri_format = `https://raw.githubusercontent.com/barhoring/Redux-course`;
const getFileUri = (hash, fileName) => {
  return `${uri_format}/${hash}/${fileName}`;
};

export default Created;
