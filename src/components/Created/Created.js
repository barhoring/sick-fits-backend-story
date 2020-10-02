import React from "react";
import Editor from "../Editor";
import { EditorContainer } from "../../containers";
import { file as fileUtils } from "../../utils";

const Created = ({ fileNames, hash }) => {
  return (
    <div>
      {fileNames &&
        fileNames.map((file) => {
          // const filePath = fileUtils.getFileUri(hash, file);
          return (
            <EditorContainer
              key={`${hash}:${file}`}
              {...{ fileName: file, hash }}
            />
          );
        })}
    </div>
  );
};

{
  /* return (<EditorContainer  key={filePath} {...{fileName:file, hash}} />); */
}
export default Created;
