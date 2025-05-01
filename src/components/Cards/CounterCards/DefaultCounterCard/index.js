/*
=========================================================
* Kubtel 2 React - v2.1.0
=========================================================





 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-countup component
import CountUp from "react-countup";

//
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultCounterCard({ color, count, title, description, suffix }) {
  return (
    <>
      <MKBox
        px={2}
        textAlign="center"
        sx={{
          height: { xs: "auto", md: "100%" },
          mb: "auto",
        }}
      >
        <MKTypography variant="h1" color={color} textGradient>
          <CountUp end={count} duration={1} />
        </MKTypography>
        <MKTypography variant="h6" color={color}>
          {suffix}
        </MKTypography>
        {title && (
          <MKTypography variant="h5" mt={2} mb={1}>
            {title}
          </MKTypography>
        )}
        {description && (
          <MKTypography
            variant="body2"
            color="text"
            sx={{ justifyContent: "space-between" }}
          >
            {description}
          </MKTypography>
        )}
      </MKBox>
    </>
  );
}

// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
  color: "info",
  description: "",
  title: "",
};

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  count: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DefaultCounterCard;
