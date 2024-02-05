import * as React from "react";

//import PropTypes from "prop-types";
//import App from "next/app";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { UserProvider } from "context/UserContext";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import getTheme from "theme";

import Head from "next/head";

import createEmotionCache from "createEmotionCache";
//import "styles/style.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const useDarkMode = () => {
  const [themeMode, setTheme] = React.useState("light");
  const [mountedComponent, setMountedComponent] = React.useState(false);

  const setMode = (mode) => {
    try {
      window.localStorage.setItem("themeMode", mode);
    } catch {
      /* do nothing */
    }

    setTheme(mode);
  };

  const themeToggler = () => {
    themeMode === "light" ? setMode("dark") : setMode("light");
  };

  React.useEffect(() => {
    try {
      const localTheme = window.localStorage.getItem("themeMode");
      localTheme ? setTheme(localTheme) : setMode("light");
    } catch {
      setMode("light");
    }

    setMountedComponent(true);
  }, []);

  return [themeMode, themeToggler, mountedComponent];
};

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [themeMode, themeToggler, mountedComponent] = useDarkMode();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Pet</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={getTheme(themeMode, themeToggler)}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <UserProvider>
          <Paper elevation={0}>{<Component {...pageProps} />}</Paper>
        </UserProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
