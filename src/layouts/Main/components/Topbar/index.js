import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import UserAuthButtons from "../UserAuthButtons";
import ShoppingCartButton from "./components/ShoppingCartButton";
import { IconButton } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
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
        width={{ xs: 120, md: 210 }}
        py={{ xs: 0.5, md: 1.2 }}
        mr={{ xs: 0.5, md: 1.2 }}
      >
        <Box
          component={"img"}
          src={
            mode === "light"
              ? "/images/logo_shepherd_navy.svg"
              : "/images/logo_shepherd_light.svg"
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
        <Box marginRight={{ xs: 2, sm: 4 }}>
          {" "}
          <Button
            size="large"
            variant="outlined"
            color="primary"
            component="a"
            href="/catalog"
            startIcon={<ViewListIcon />}
          >
            Каталог
          </Button>
        </Box>
        <Box marginRight={{ xs: 2, sm: 4 }}>
          <Link
            underline="none"
            component="a"
            href='/catalog?homePageQueryState={"page":1,"type":"Treat","designedFor":"1"}'
            color={colorInvert ? "common.white" : "primary.light"}
            sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
          >
            Собаки
          </Link>
        </Box>
        <Box marginRight={{ xs: 2, sm: 4 }}>
          <Link
            underline="none"
            component="a"
            href='/catalog?homePageQueryState={"page":1,"type":"Treat","designedFor":"2"}'
            color={colorInvert ? "common.white" : "primary.light"}
            sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
          >
            Кошки
          </Link>
        </Box>
        <Box marginRight={{ xs: 2, sm: 4 }}>
          <Link
            underline="none"
            component="a"
            href="/catalog?"
            color={colorInvert ? "common.white" : "primary.light"}
            sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
          >
            Твердые корма
          </Link>
        </Box>
        <Box marginRight={{ xs: 2, sm: 4 }}>
          <Link
            underline="none"
            component="a"
            href="/catalog"
            color={colorInvert ? "common.white" : "primary.light"}
            sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
          >
            Мягкие корма
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }} alignItems={"right"}>
        <ShoppingCartButton />
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
            color={colorInvert ? "common.white" : "primary.light"}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <IconEmail />
          </Link>
        </Box> */}
        <UserAuthButtons />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }} alignItems={"center"}>
        <IconButton
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={"outlined"}
          sx={{
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
            "&:hover": {
              backgroundColor: (theme) =>
                alpha(theme.palette.primary.main, 0.16),
            },
          }}
        >
          <MenuIcon />
        </IconButton>
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
