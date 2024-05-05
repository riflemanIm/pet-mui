import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { currentUserState } from "atoms";
import { useRecoilValue } from "recoil";
import { alpha } from "@mui/material/styles";
import { Typography } from "@mui/material";

const TopButtons = () => (
  <>
    <Box marginLeft={4}>
      <Button
        variant="contained"
        color="primary"
        component="a"
        //target="blank"
        href="/signin"
        size="large"
        startIcon={<LoginOutlinedIcon />}
      >
        Вход
      </Button>
    </Box>
    <Box marginLeft={4}>
      <Button
        size="large"
        variant="outlined"
        color="primary"
        component="a"
        href="/signup"
        startIcon={<PersonOutlineIcon />}
        sx={(theme) => ({
          padding: 1,
          borderColor: alpha(theme.palette.background.paper, 0.8),
          color: alpha(theme.palette.background.paper, 0.8),
          "&:hover,&:active": {
            borderColor: theme.palette.background.default,
            color: theme.palette.background.default,
          },
        })}
      >
        Регистрация
      </Button>
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

  return currentUser == null ? (
    top ? (
      <TopButtons />
    ) : (
      <NavButtons />
    )
  ) : (
    <Typography
      variant="h6"
      fontWeight={900}
      gutterBottom
      mt={!top && 12}
      color={!colorInvert && top ? "primary.contrastText" : "primary.textBody"}
    >
      {currentUser.name != null ? currentUser.name : currentUser.email}
    </Typography>
  );
};

export default UserAuthButtons;
