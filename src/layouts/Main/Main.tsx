import React, { useEffect, useState, JSX } from "react";
//import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import Container from "components/Container";
import TopNav from "components/TopNav";

import { Topbar, Sidebar, Footer } from "./components";

import pages from "../navigation";
import { useRecoilState } from "recoil";
import { currentUserState, shoppingCartState } from "atoms";
type Props = {
  children: string | JSX.Element | JSX.Element[];
  colorInvert?: boolean;
  bgcolor?: string;
};

const Main = ({
  children,
  colorInvert = false,
  bgcolor = "transparent",
}: Props) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  const [, setCurrentUserState] = useRecoilState(currentUserState);
  const [, setShoppingCart] = useRecoilState(shoppingCartState);

  useEffect(() => {
    const localStorageUser = window.localStorage.getItem("user");
    if (localStorageUser) {
      const user = JSON.parse(localStorageUser);
      if (user) {
        setCurrentUserState(user);
      }
    }
    const localStorageCard = window.localStorage.getItem("card");

    if (localStorageCard) {
      const card = JSON.parse(localStorageCard);
      if (card) {
        setShoppingCart(card);
      }
    }
  }, []);

  return (
    <Box>
      <Box bgcolor={bgcolor} position={"relative"} zIndex={theme.zIndex.appBar}>
        <Container paddingTop={"8px !important"} paddingBottom={"0 !important"}>
          <TopNav colorInvert={colorInvert} />
        </Container>
      </Box>
      <AppBar
        position={"sticky"}
        sx={{
          top: 0,
          backgroundColor: trigger
            ? theme.palette.background.level1
            : theme.palette.background.level2,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          <Topbar
            onSidebarOpen={handleSidebarOpen}
            colorInvert={trigger ? false : colorInvert}
          />
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
