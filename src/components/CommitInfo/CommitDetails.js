import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./useStyles";

const CommitDetails = ({ hash, authorName }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Commit Details
      </Typography>
      <div>
        <p className={classes.commitDetails}>
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
        </p>
      </div>
    </>
  );
};

export default CommitDetails;
