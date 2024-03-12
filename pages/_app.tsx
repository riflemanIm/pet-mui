import { RecoilRoot, useRecoilSnapshot } from "recoil";

import { useEffect, useState } from "react";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getTheme from "../src/theme";
import { AppProps } from "next/app";

import { RecoilURLSyncJSONNext } from "recoil-sync-next";

function DebugObserver() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    console.debug("The following atoms were modified:");
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}
export const useDarkMode = () => {
  type themeType = "light" | "dark";
  const [themeMode, setTheme] = useState<themeType>("light");
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode: themeType) => {
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

  useEffect(() => {
    try {
      const localTheme = window.localStorage.getItem("themeMode") as themeType;
      localTheme ? setTheme(localTheme) : setMode("light");
    } catch {
      setMode("light");
    }

    setMountedComponent(true);
  }, []);

  return [themeMode, themeToggler, mountedComponent];
};

function MyApp({ Component, pageProps }: AppProps) {
  const [themeMode, themeToggler, mountedComponent] = useDarkMode();

  return (
    <RecoilRoot>
      <RecoilURLSyncJSONNext location={{ part: "queryParams" }}>
        <DebugObserver />
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          <ThemeProvider theme={getTheme(themeMode, themeToggler)}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline /> <Component {...pageProps} />
          </ThemeProvider>{" "}
        </SnackbarProvider>
      </RecoilURLSyncJSONNext>
    </RecoilRoot>
  );
}

export default MyApp;
