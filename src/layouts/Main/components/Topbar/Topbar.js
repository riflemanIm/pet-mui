import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import IconSoundcloud from "svg/IconSoundcloud";
import IconEmail from "svg/IconEmail";

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {
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
        title="theFront"
        width={{ xs: 120, md: 280 }}
      >
        <Box
          component={"img"}
          src={
            mode === "light" && !colorInvert
              ? "/images/logo_shepherd_light.svg"
              : "/images/logo_shepherd_light.svg"
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
        <Box marginRight={{ xs: 2, sm: 4 }}>
          <Link
            underline="none"
            component="a"
            href="/"
            color={colorInvert ? "common.white" : "primary.contrastText"}
            sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
          >
            главная
          </Link>
        </Box>
        <Box marginRight={{ xs: 2, sm: 4 }}>
          <Link
            underline="none"
            component="a"
            href="/catalog"
            color={colorInvert ? "common.white" : "primary.contrastText"}
            sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
          >
            каталог
          </Link>
        </Box>
        <Box marginRight={{ xs: 2, sm: 4 }}>
          <Link
            underline="none"
            component="a"
            href="/about"
            color={colorInvert ? "common.white" : "primary.contrastText"}
            sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
          >
            о нас
          </Link>
        </Box>
        <Box marginRight={{ xs: 2, sm: 4 }}>
          <Link
            underline="none"
            component="a"
            href="/about"
            color={colorInvert ? "common.white" : "primary.contrastText"}
            sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
          >
            контакты
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"right"}>
        {/* <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="https://soundcloud.com/baaahs"
            color={colorInvert ? "common.white" : "common.white"}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <IconSoundcloud color="white" />
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="mailto:info@baaahs.org?subject=Writing%20from%20the%20web"
            color={colorInvert ? "common.white" : "primary.contrastText"}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <IconEmail />
          </Link>
        </Box> */}
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="/login"
            size="large"
          >
            Вход
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }} alignItems={"center"}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={"outlined"}
          sx={{
            borderRadius: 2,
            minWidth: "auto",
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
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
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
