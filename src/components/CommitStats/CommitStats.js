import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { file as fileUtils } from "../../utils";

const useStyles = makeStyles({
  paper: {
    padding: 10,
    backgroundColor: "gainsboro",
  },
  root: {
    width: "75%",
    height: "75%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CommitStats = ({
  hash,
  authorName,
  numFilesAdded,
  numFilesModified,
  numFilesDeleted,
  numFilesRenamed,
}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const commitGithubLink = fileUtils.getGithubCommitLink(hash);

  return (
    <Paper className={`${classes.paper} flex center`} elevation={3}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Commit {hash}
          </Typography>
          <Typography variant="h5" component="h2">
            by {authorName}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            on September 12, 1991
          </Typography>
          <div className="flex center">
            <div className="flex vertical" style={{ alignItems: "flex-start" }}>
              <Typography variant="h5" component="h2">
                {bull} {numFilesAdded} files added
              </Typography>
              <Typography variant="h5" component="h2">
                {bull} {numFilesModified} files modified
              </Typography>
              <Typography variant="h5" component="h2">
                {bull} {numFilesDeleted} files deleted
              </Typography>
              <Typography variant="h5" component="h2">
                {bull} {numFilesRenamed} files renamed
              </Typography>
            </div>
          </div>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            size="small"
            target="_blank"
            rel="noopener noreferrer"
            href={commitGithubLink}
          >
            <GitHubIcon style={{ fontSize: "4rem" }} color="primary" />
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default CommitStats;
