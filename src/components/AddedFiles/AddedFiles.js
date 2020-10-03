import React from "react";
import { EditorContainer } from "../../containers";

const Created = ({ files, hash }) => {
  return (
    <div>
      {files &&
        files.map((file) => {
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
