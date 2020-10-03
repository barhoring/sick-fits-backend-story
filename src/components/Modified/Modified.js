import React from "react";
import { DiffEditorContainer } from "../../containers";

const Modified = ({ filesModify, hash, prevHash }) => {
  return (
    <>
      {filesModify &&
        filesModify.map((file) => {
          return (
            <div style={styles.root}>
              <DiffEditorContainer
                key={`${hash}:${file}`}
                {...{ hash, prevHash, fileName: file }}
              />
            </div>
          );
        })}
    </>
  );
};

const styles = {
  root: {
    width: "100wh",
    height: "80vh",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: 20,
  },
};

export default Modified;
