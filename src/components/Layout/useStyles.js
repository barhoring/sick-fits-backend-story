import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "salmon",
  },
  gitty: {
    fontFamily: "Damion",
  },
}));

export default useStyles;
