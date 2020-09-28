import React from "react";
import { Typography } from "@material-ui/core";

const FileNameHeading = ({ fileName, link }) => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        {fileName}
      </Typography>
    </>
  );
};

export default FileNameHeading;
