import React from "react";
import { Button, Paper } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { file as fileUtils } from "../../utils";
import useStyles from "./useStyles";
import FileAccordion from "./FileAccordion";
import CommitDetails from "./CommitDetails";

const CommitInfo = ({
  hash,
  authorName,
  filesAdded,
  filesModify,
  filesDeleted,
  filesRenamed,
}) => {
  // debugger;
  const classes = useStyles();
  const commitGithubLink = fileUtils.getGithubCommitLink(hash);

  return (
    <>
      <Paper className={classes.paper} elevation={1}>
        <div className={classes.root}>
          <CommitDetails {...{ hash, authorName }} />
          <FileAccordion files={filesAdded} title=" files added" />
          <FileAccordion files={filesModify} title="files modified" />
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
    </>
  );
};

export default CommitInfo;
