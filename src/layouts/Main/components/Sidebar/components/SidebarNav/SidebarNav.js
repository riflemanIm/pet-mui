import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Link from "@mui/material/Link";
//import NavItem from "./components/NavItem";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={"flex"}
          component="a"
          href="/"
          title="Shepherd pet"
          width={{ xs: 120, md: 150 }}
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
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box my={2}>
          <Link
            underline="none"
            component="a"
            href="/"
            sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
          >
            главная
          </Link>
        </Box>
        <Box my={2}>
          <Link
            underline="none"
            component="a"
            href="/catalog"
            sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
          >
            каталог
          </Link>
        </Box>
        <Box my={2}>
          <Link
            underline="none"
            component="a"
            href="/about"
            sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
          >
            о нас
          </Link>
        </Box>
        <Box my={2}>
          <Link
            underline="none"
            component="a"
            href="/contacts"
            sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
          >
            контакты
          </Link>
        </Box>

        {/* <Box>
          <NavItem title={"Landings"} items={landingPages} />
        </Box>
        <Box>
          <NavItem title={"Company"} items={companyPages} />
        </Box>
        <Box>
          <NavItem title={"Pages"} items={secondaryPages} />
        </Box>
        <Box>
          <NavItem title={"Account"} items={accountPages} />
        </Box>
        <Box>
          <NavItem title={"Blog"} items={blogPages} />
        </Box>
        <Box>
          <NavItem title={"Portfolio"} items={portfolioPages} />
        </Box> */}
        <Box marginTop={12}>
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
        <Box marginTop={2}>
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
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
