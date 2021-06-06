import React from "react";
import { EditorContainer } from "../../containers";

const Created = ({ files, hash }) => {
  return (
    <div>
    hii {hash}
      {files &&
        files.map((file) => {
          console.log("file: ", file);
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
