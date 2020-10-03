import React from "react";
import { EditorContainer } from "../../containers";

const Created = ({ fileNames, hash }) => {
  return (
    <div>
      {fileNames &&
        fileNames.map((file) => {
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

export default Created;
