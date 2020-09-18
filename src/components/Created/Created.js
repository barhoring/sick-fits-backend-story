import React from "react";
import Editor from "../Editor";

const Created = ({ fileNames, hash }) => {
  return (
    <>
      <Editor filePath="https://raw.githubusercontent.com/barhoring/Redux-course/4d73f278eed13621eb9f03e11fde72e77cd3e8a6/src/actions/user-actions.js" />
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
