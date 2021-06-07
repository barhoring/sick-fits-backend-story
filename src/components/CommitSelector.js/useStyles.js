import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  disabledLink: {
    pointerEvents: "none",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "30%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    "& > *": {
      margin: theme.spacing(3),
    },
  },
}))

export default useStyles
