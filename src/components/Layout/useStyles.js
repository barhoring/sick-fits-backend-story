import { makeStyles } from "@material-ui/core/styles"

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
    flexGrow: 1,
    marginBottom: theme.spacing(5),
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
