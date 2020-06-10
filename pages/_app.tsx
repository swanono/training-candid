import { useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "lib/apollo";
import { ThemeProvider as MUIThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "config/theme";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <StylesProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ApolloProvider client={client}>
            <Head>
              <title>Next Apollo</title>
            </Head>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </MUIThemeProvider>
    </StylesProvider>
  );
};

export default App;
