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
    // border: "1px solid",
    display: "flex",
    flexDirection: "column",
    // flexGrow: 1,
    // marginTop: theme.spacing(5),
  },
}));

const About = (props) => {
  console.log(props);
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
          Git is a powerful tool, but today git is mainly used as a boring way
          of securely saving versions of your code. This is ok but I see all
          this potential, and I see squandering. Git could be a GREAT
          educational tool, telling the story of how your code incrementally
          transforms. This is why I created GitStory
        </Typography>
      </div>
    </div>
  );
};

export default About;
