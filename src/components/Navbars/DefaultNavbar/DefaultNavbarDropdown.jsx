import Link from "next/link";

// @mui material components
import MuiLink from "@mui/material/Link";
import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";

//
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import NextMuiLink from "components/NextMuiLink";
import pxToRem from "theme/functions/pxToRem";

function DefaultNavbarDropdown({
  name,
  icon,
  children,
  collapseStatus,
  light,
  href,
  route,
  collapse,
  ...rest
}) {
  return (
    <>
      <NextMuiLink href={route || href || "#"}>
        <MKBox
          {...rest}
          mx={1}
          p={1}
          display="flex"
          alignItems="baseline"
          color={light ? "white" : "dark"}
          opacity={light ? 1 : 0.6}
        >
          <MKTypography
            variant="body2"
            lineHeight={0.8}
            color="inherit"
            sx={{
              fontSize: pxToRem(18),
              alignSelf: "center",
              "& *": { verticalAlign: "middle" },
            }}
          >
            {icon}
          </MKTypography>
          <MKTypography
            variant="button"
            fontWeight="regular"
            textTransform="capitalize"
            color={light ? "white" : "primary"}
            sx={{ ml: 1, mr: 0.25, fontSize: pxToRem(16) }}
          >
            {name}
          </MKTypography>
          <MKTypography
            variant="body2"
            color={light ? "white" : "dark"}
            ml="auto"
          >
            <Icon sx={{ fontWeight: "normal", verticalAlign: "middle" }}>
              {collapse && "keyboard_arrow_down"}
            </Icon>
          </MKTypography>
        </MKBox>
      </NextMuiLink>
      {children && (
        <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of DefaultNavbarDropdown
// DefaultNavbarDropdown.defaultProps = {
//   children: false,
//   collapseStatus: false,
//   light: false,
//   href: "",
//   route: "",
// };

// Typechecking props for the DefaultNavbarDropdown
// DefaultNavbarDropdown.propTypes = {
//   name: PropTypes.string.isRequired,
//   icon: PropTypes.node.isRequired,
//   children: PropTypes.node,
//   collapseStatus: PropTypes.bool,
//   light: PropTypes.bool,
//   href: PropTypes.string,
//   route: PropTypes.string,
//   collapse: PropTypes.bool.isRequired,
// };

export default DefaultNavbarDropdown;
