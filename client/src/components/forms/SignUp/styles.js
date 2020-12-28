import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    '& .MuiTextField-root': {
      margin: theme.spacing(2, 'auto'),
      width: '500px',
      display: 'flex',
      'flex-direction': 'column',
    },
  },
  button: {
    width: '500px',
    height: '50px',
    marginTop: '20px'
  },
}));

export default useStyles;