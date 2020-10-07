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
      </div>
    </div>
  );
};

export default About;
