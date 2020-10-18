import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
    // backgroundColor: "blue",
    backgroundColor: theme.palette.grey["300"],

    // flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      //   width: theme.spacing(16),
      //height: theme.spacing(16),
    },
  },
  paper: {
    width: "90%",
    padding: "2rem",
  },
}));

export default useStyles;
