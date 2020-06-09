
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F64850',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: ' rgb(246, 72, 80)',
        borderRadius: 999,
        color: 'white',
      },
    },
  },
});

export default theme;