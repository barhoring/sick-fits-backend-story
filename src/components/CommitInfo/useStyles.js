import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.grey["100"],
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    width: "auto",
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
