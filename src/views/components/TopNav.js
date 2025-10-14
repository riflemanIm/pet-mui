import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const TopNav = ({ colorInvert = false }) => {
  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center">
      {/* Desktop & tablet: hide on xs */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
        }}
      >
        <Box m={{ xs: 1, sm: 2 }}>
          <Link
            underline="none"
            component="a"
            href="/about"
            sx={{ display: "flex", alignItems: "center" }}
          >
            О компании
          </Link>
        </Box>
        <Box mr={{ xs: 1, sm: 2 }}>
          <Link
            underline="none"
            component="a"
            href="/map"
            sx={{ display: "flex", alignItems: "center" }}
          >
            На карте
          </Link>
        </Box>
        <Box mr={{ xs: 1, sm: 2 }}>
          <Link underline="none" component="a" href="/cooperation">
            Сотрудничество
          </Link>
        </Box>
        <Box mr={{ xs: 1, sm: 2 }}>
          <Link underline="none" component="a" href="/breeders">
            Заводчикам
          </Link>
        </Box>
        <Box mr={{ xs: 1, sm: 2 }}>
          <Link underline="none" component="a" href="/contacts">
            Контакты
          </Link>
        </Box>
      </Box>

      {/* Always visible */}
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
