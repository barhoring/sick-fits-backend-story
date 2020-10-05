import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "white",
  },
  gitty: {
    fontFamily: "Secular One",
    color: "inherit",
    //fontSize: "8rem",
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
}));

export default useStyles;
