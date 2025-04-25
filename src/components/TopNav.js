import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import PropTypes from "prop-types";

import ThemeModeToggler from "./ThemeModeToggler";
import { Button, Typography } from "@mui/material";
// О компании
// Где купить
// Контакты
// Сотрудничество
// Заводчикам

const TopNav = ({ colorInvert = false }) => {
  return (
    <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
      <Box m={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          component="a"
          href="/about"
          sx={{ display: "flex", alignItems: "center" }}
        >
          О компании
          {/* <Box
            padding={0.5}
            display={"inline-flex"}
            borderRadius={1}
            bgcolor={"primary.main"}
            marginLeft={1}
          >
            <Typography
              variant={"caption"}
              sx={{ color: "common.white", lineHeight: 1 }}
            >
              +7 989 777 2000
            </Typography>
          </Box> */}
        </Link>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link
          underline="none"
          component="a"
          href="/map"
          sx={{ display: "flex", alignItems: "center" }}
        >
          На карте
        </Link>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link underline="none" component="a" href="/cooperation">
          Сотрудничество
        </Link>
      </Box>
      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link underline="none" component="a" href="/breeders">
          Заводчикам
        </Link>
      </Box>

      <Box marginRight={{ xs: 1, sm: 2 }}>
        <Link underline="none" component="a" href="/contacts">
          Контакты
        </Link>
      </Box>
      <Box>
        <Button
          component="a"
          variant="text"
          href="tel:+79897772000"
          color="primary"
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 1,
            borderRadius: 1,
          }}
        >
          +7 989 777 2000
        </Button>
      </Box>
    </Box>
  );
};

TopNav.propTypes = {
  colorInvert: PropTypes.bool,
};

export default TopNav;
