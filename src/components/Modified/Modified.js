import React from "react";
import DiffEditor from "../DiffEditor";
import { file as fileUtils } from "../../utils";

const Modified = ({ fileNames, currentHash, prevHash }) => {
  return (
    <>
      {fileNames &&
        fileNames.map((file) => {
          const modifiedFilePath = fileUtils.getFileUri(file, currentHash);
          const originalFilePath = fileUtils.getFileUri(file, prevHash);

          return (
            <DiffEditor
              key={modifiedFilePath}
              modifiedFilePath={modifiedFilePath}
              originalFilePath={originalFilePath}
            />
          );
        })}
    </>
  );
};

export default Modified;
