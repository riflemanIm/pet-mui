import React from "react";
import Router from "next/router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import { currentUserState, shoppingCartState } from "atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { alpha } from "@mui/material/styles";
import { IconButton } from "@mui/material";

const TopButtons = () => (
  <>
    <Box marginLeft={4}>
      <IconButton
        color="secondary"
        component="a"
        href="/signin"
        size="large"
        sx={{
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
          "&:hover": {
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }}
      >
        <LoginOutlinedIcon />
      </IconButton>
    </Box>
    <Box marginLeft={4}>
      <IconButton
        size="large"
        variant="outlined"
        color="secondary"
        component="a"
        href="/signup"
        sx={{
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
          "&:hover": {
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }}
      >
        <PersonOutlineIcon />
      </IconButton>
    </Box>
    <Box marginLeft={4}></Box>
  </>
);
const NavButtons = () => (
  <>
    <Box marginTop={12}>
      <Button
        size={"large"}
        variant="contained"
        color="primary"
        fullWidth
        component="a"
        target="blank"
        href="/signin"
        startIcon={<LoginOutlinedIcon />}
      >
        Вход
      </Button>
    </Box>
    <Box marginTop={2}>
      <Button
        size={"large"}
        variant="outlined"
        fullWidth
        component="a"
        href="/signup"
        startIcon={<PersonOutlineIcon />}
      >
        Регистрация
      </Button>
    </Box>
  </>
);

const UserAuthButtons = ({ top = true, colorInvert = false }) => {
  const currentUser = useRecoilValue(currentUserState);
  console.log("currentUser", currentUser);
  const [, setCurrentUser] = useRecoilState(currentUserState);
  const [, setShoppingCart] = useRecoilState(shoppingCartState);

  const logout = () => {
    setCurrentUser(null);
    setShoppingCart([]);

    window.localStorage.removeItem("user");
    window.localStorage.removeItem("card");

    Router.push("/");
  };

  return currentUser == null ? (
    top ? (
      <TopButtons />
    ) : (
      <NavButtons />
    )
  ) : (
    <>
      <Box
        ml={top ? 4 : 0}
        mt={!top ? 12 : 0}
        alignContent="center"
        textAlign="center"
      >
        <Typography
          variant="body2"
          fontWeight={900}
          color={!colorInvert && top ? "primary.dark" : "primary.textBody"}
        >
          {currentUser.name != null ? currentUser.name : currentUser.email}
        </Typography>
      </Box>
      <Box ml={top ? 4 : 0} mt={!top ? 2 : 0}>
        <IconButton
          size="large"
          variant="outlined"
          color="secondary"
          onClick={logout}
          fullWidth
          sx={{
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
            "&:hover": {
              backgroundColor: (theme) =>
                alpha(theme.palette.primary.main, 0.16),
            },
          }}
        >
          <LogoutIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default UserAuthButtons;
