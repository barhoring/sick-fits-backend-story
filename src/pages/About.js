import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Secular One",
    color: "inherit",
  },
  root: {
    width: "90%",
    padding: "2rem",
  },
}));

const About = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Typography variant="h2" gutterBottom>
          About
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ display: "felx", alignSelf: "center", width: "50%" }}
        >
          Git is a powerful tool, but today git is mainly used as a way of
          either saving versions of your code or as a way to sync up the
          codebase. While this is ok, I couldn't stand aside while Git's GREAT
          potential as an educational tool is squandering.
        </Typography>
        <img style={{ maxWidth: "300px" }} src="/images/git_1.png" />
        <Typography
          variant="body1"
          gutterBottom
          style={{ display: "felx", alignSelf: "center", width: "50%" }}
        >
          Like the victorious git allows you to amend history, Telling the story
          of how your code incrementally transforms. Git Story will allow you to
          understand new topics and ideas in code quickly.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ display: "felx", alignSelf: "center", width: "50%" }}
        >
          I used to work in a big corporate where my colleagues and I were
          frustrated to understand the humongous codebase we were working on.
          How can I make the life of the next developer to work on this problem
          a lot easier? I used to work in a big corporate where the codebase was
          big, old, and complex. it was so humongous, new features being added
          to the application had to be chunked into multiple different commits
          made on a span of a couple of weeks or mo. Those commits were a mere
          drop in an ocean of other commits made by other developers in the
          team.
        </Typography>
        <img style={{ maxWidth: "300px" }} src="/images/git_3.png" />
      </div>
    </div>
  );
};

export default About;
