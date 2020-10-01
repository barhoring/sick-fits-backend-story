import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Typography,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { file as fileUtils } from "../../utils";
import useStyles from "./useStyles";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: 10,
//     // backgroundColor: "gainsboro",
//     backgroundColor: theme.palette.grey["300"],
//   },
//   root: {
//     width: "75%",
//     height: "75%",
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)",
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// }));

const CommitStats = ({
  hash,
  authorName,
  filesAdded,
  filesModify,
  filesDeleted,
  filesRenamed,
  numFilesAdded,
  numFilesModified,
  numFilesDeleted,
  numFilesRenamed,
}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const commitGithubLink = fileUtils.getGithubCommitLink(hash);

  return (
    <>
      <Paper
        className={classes.paper}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        elevation={3}
      >
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="commit-degtails"
            >
              <Typography className={classes.heading}>
                Commit Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ flexDirection: "column" }}>
              <p
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
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
              <Button
                size="small"
                target="_blank"
                rel="noopener noreferrer"
                href={commitGithubLink}
              >
                <GitHubIcon style={{ fontSize: "4rem" }} color="primary" />
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion disabled={filesAdded.length === 0 ? true : false}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                {filesAdded.length} files added
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                {filesAdded.map((file, index) => {
                  return <div style={{ textAlign: "start" }}>{file}</div>;
                })}
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion disabled={filesModify.length === 0 ? true : false}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                {filesModify.length} files modified
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                {filesModify.map((file, index) => {
                  return <div style={{ textAlign: "start" }}>{file}</div>;
                })}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>
    </>
  );
};

export default CommitStats;
