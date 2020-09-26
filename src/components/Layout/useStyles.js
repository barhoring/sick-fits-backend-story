import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "white",
  },
  gitty: {
    fontFamily: "Damion",
    color: "salmon",
    // fontSize: "2rem",
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
