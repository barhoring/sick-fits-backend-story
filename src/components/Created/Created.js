import React from "react";
import Editor from "../Editor";
import { file as fileUtils } from "../../utils";

const Created = ({ fileNames, hash }) => {
  return (
    <>
      {fileNames &&
        fileNames.map((file) => {
          const filePath = fileUtils.getFileUri(hash, file);
          return <Editor key={filePath} filePath={filePath} />;
        })}
    </>
  );
};

export default Created;
