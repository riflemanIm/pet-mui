/*
=========================================================
* Shepherd React - v2.1.0
=========================================================





 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Tooltip from "@mui/material/Tooltip";

//
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function TariffCard({ name, count, pro, ...rest }) {
  return (
    <MKBox position="relative">
      {name || count > 0 ? (
        <MKBox mt={1} ml={1} lineHeight={1}>
          {name && (
            <MKTypography variant="h6" fontWeight="bold">
              {name}
            </MKTypography>
          )}
          {count > 0 && (
            <MKTypography
              variant="button"
              fontWeight="regular"
              color="secondary"
            >
              {count} {count === 1 ? "Example" : "Examples"}
            </MKTypography>
          )}
        </MKBox>
      ) : null}
    </MKBox>
  );
}

// Setting default props for the TariffCard
TariffCard.defaultProps = {
  name: "",
  count: 0,
  pro: false,
};

// Typechecking props for the TariffCard
TariffCard.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number,
  pro: PropTypes.bool,
};

export default TariffCard;
