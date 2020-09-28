import React from "react";
import DiffEditor from "../DiffEditor";
import { file as fileUtils } from "../../utils";

const Modified = ({ filesModify, hash, prevHash }) => {
  return (
    <>
      {filesModify &&
        filesModify.map((file) => {
          const modifiedFilePath = fileUtils.getFileUri(hash, file);
          const originalFilePath = fileUtils.getFileUri(prevHash, file);

          return (
            <div style={styles.root}>
              <DiffEditor
                key={modifiedFilePath}
                modifiedFilePath={modifiedFilePath}
                originalFilePath={originalFilePath}
                githubLink={fileUtils.getGithubCommitLink(hash, file)}
                fileName={file}
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
