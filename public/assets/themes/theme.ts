
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F64850',
      light: '#FF7F5'
    },
    secondary: {
      main: '#e8f7f7',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark:  '#d32f2f',
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
        '&:hover': {
          background: ' rgb(246, 72, 80)',
          borderRadius: 999,
          color: 'white',
        }
        
      },
      
    },
  },
  typography : {
    htmlFontSize: 16,
    fontFamily: ["Modern Hera", "Helvetica Neue", "Helvetica", "Roboto"].join(','),
    
  },
});

export default theme;