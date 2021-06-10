import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  repoLink: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      // color: "green",
      textDecoration: "underline solid white 2px",
    },
  },
  hero: {
    "& *": {
      margin: "0px 1rem 0 1rem",
    },
  },
  toolBar: {
    justifyContent: "center",
    padding: "1rem",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Secular One",
    color: "inherit",
  },
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
    justifyContent: "center",
  },
  brief: {
    fontFamily: "Covered By Your Grace",
    color: "",
  },
  flex: {
    display: "flex",
  },
  vertical: { flexDirection: "column" },
  horizontal: { flexDirection: "row" },
}))

export default useStyles
