import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",

    width: "90%",
    padding: "2rem",
  },
  root: {
    justifyContent: "center",
    display: "flex",
    flexGrow: 1,
    width: "auto",
    backgroundColor: theme.palette.grey["200"],
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  githubButton: {
    width: "auto",
    margin: "1rem",
  },
  commitDetails: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "flex-start",
  },
}));
export default useStyles;
