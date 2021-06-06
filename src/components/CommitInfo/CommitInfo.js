import React from "react";
import { Button, Paper, Typography } from "@material-ui/core";
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
          <Typography variant="subtitle2" color="textSecondary">
            <p>Not showing deleted and renamed files</p>
          </Typography>
          <Typography variant="subtitle2">
            <Button
              size="small"
              target="_blank"
              rel="noopener noreferrer"
              href={commitGithubLink}
              title="View this commit on github"
            >
              <GitHubIcon
                style={{ fontSize: "3rem" }}
                color="primary"
              />
            </Button>
          </Typography>
        </Paper>
      </div>
    </>
  );
};

export default CommitInfo;
