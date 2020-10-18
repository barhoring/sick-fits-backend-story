import React, { useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { fetchRawGithubFile } from "../../utils";
import useStyles from "./useStyles";
import { Paper } from "@material-ui/core";
const filePath = `https://raw.githubusercontent.com/barhoring/gitty-markdown/master`;

const Chapter = ({ hash }) => {
  const [text, setText] = useState("");
  const classes = useStyles();
  fetchRawGithubFile(`${filePath}/${hash}.md`, setText);
  return (
    <div>
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={3} square={true}>
          <MarkdownPreview source={text} />
        </Paper>
      </div>
    </div>
  );
};

export default Chapter;
