import React from "react";
import { Button, Paper } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import useStyles from "./useStyles";
import FileAccordion from "./FileAccordion";
import CommitDetails from "./CommitDetails";

const CommitInfo = ({
  hash,
  commitGithubLink,
  authorName,
  filesAdded,
  filesModify,
  filesDeleted,
  filesRenamed,
}) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={1} square={true}>
          <div>
            <CommitDetails {...{ hash, authorName }} />
            <div style={{ width: "25vw" }}>
              <FileAccordion files={filesAdded} title=" files added" />
              <FileAccordion files={filesModify} title="files modified" />
            </div>
          </div>
          <Button
            className={classes.githubButton}
            size="small"
            target="_blank"
            rel="noopener noreferrer"
            href={commitGithubLink}
          >
            <GitHubIcon style={{ fontSize: "4rem" }} color="primary" />
          </Button>
          <p>Not showing deleted and renamed files</p>
        </Paper>
      </div>
    </>
  );
};

export default CommitInfo;
