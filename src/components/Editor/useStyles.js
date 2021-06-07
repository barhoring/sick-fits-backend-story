import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.grey['50'],
  },
  root: {
    width: '90vw',
    backgroundColor: theme.palette.grey['100'],
    margin: theme.spacing(1),
  },
  editor: {
    width: '100wh',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0 20 0 20',
  },
}));

export default useStyles;
