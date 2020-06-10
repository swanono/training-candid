import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { Hidden } from "@material-ui/core";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F64850",
      light: "#FF7F5",
    },
    secondary: {
      main: "#e8f7f7",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
    },
    background: {
      default: "#fff",
    },
    text : {
      primary:  "#222",
      secondary: "rgb(70, 70, 70)",
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: "rgb(246, 72, 80)",
        borderRadius: 999,
        color: "white",
        overflow: "hidden",
        height: "50px",
        width: "auto",
        fontSize: "1rem",
        flexGrow: 0,
        verticalAlign: "middle",
        textAlign: "center",
        display: "inline-block",
        fontWeight: "bold",
        
        paddingLeft: "3rem",
        paddingRight: "3rem",

        "&:hover": {
          background: " rgb(246, 72, 80)",
          borderRadius: 999,
          color: "white",
          flexGrow: 0,
          verticalAlign: "middle",
          textAlign: "left",
        },
      },

      
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "Modern Era, Helvetica Neue, Helvetica, Roboto",
    button: {
      fontFamily: "Modern Era, Helvetica Neue, Helvetica, Roboto",
      textTransform: "none",
      fontSize: "1rem",
      paddingLeft: "3rem",
      paddingRight: "3rem",
      verticalAlign: "middle",
      textAlign: "center",
      "&:hover": {
        textAlign: "left",
      }

    },
  },
});

export default theme;
