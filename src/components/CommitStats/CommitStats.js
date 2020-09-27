import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";

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
            adjective
          </Typography>
          <div
            className="flex vertical"
            style={{ alignItems: "flex-start", border: "2px solid" }}
          >
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
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default CommitStats;
