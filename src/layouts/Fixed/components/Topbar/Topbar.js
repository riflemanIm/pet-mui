import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

import { ThemeModeToggler } from "./components";

const Topbar = ({ onSidebarOpen }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={1}
    >
      <Box
        display={"flex"}
        component="a"
        href="/"
        title="BAAAHS"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={"img"}
          src={
            mode === "light"
              ? "/images/baaahs-logo.svg"
              : "/images/baaahs-logo.svg"
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
        <Box marginLeft={3}>
          <Link underline="none" component="a" href="/" color="text.primary">
            Home
          </Link>
        </Box>
        <Box marginLeft={3}>
          <Link
            underline="none"
            component="a"
            href="/home"
            color="text.primary"
          >
            Pages
          </Link>
        </Box>
        <Box marginLeft={3}>
          <Link
            underline="none"
            component="a"
            href="/blocks"
            color="text.primary"
          >
            Components
          </Link>
        </Box>
        <Box marginLeft={3}>
          <Link
            underline="none"
            component="a"
            href="/demos"
            color="text.primary"
          >
            Demos
          </Link>
        </Box>
        <Box marginLeft={3}>
          <ThemeModeToggler />
        </Box>
        <Box marginLeft={3}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
            size="large"
          >
            Purchase now
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }} alignItems={"center"}>
        <Box marginRight={1}>
          <ThemeModeToggler />
        </Box>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={"outlined"}
          sx={{
            borderRadius: 2,
            minWidth: "auto",
            padding: 1,
            borderColor: alpha(theme.palette.background.paper, 0.5),
            color: alpha(theme.palette.background.paper, 0.5),
            "&:hover,&:active": {
              borderColor: theme.palette.background.default,
              color: theme.palette.background.default,
            },
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Topbar;
