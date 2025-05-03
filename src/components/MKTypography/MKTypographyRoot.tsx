import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { MKTypographyProps } from "components/MKTypography";

interface OwnerState extends MKTypographyProps {}

const MKTypographyRoot = styled<
  React.FC<TypographyProps & { ownerState: OwnerState }>
>(Typography, {
  shouldForwardProp: (prop) => prop !== "ownerState",
})(({ theme, ownerState }) => {
  const { palette, typography, functions } = theme;
  const {
    color,
    textTransform,
    verticalAlign,
    fontWeight,
    opacity,
    textGradient,
  } = ownerState;

  const { gradients, transparent } = palette;
  const {
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
  } = typography;
  const { linearGradient } = functions;

  const fontWeights = {
    light: fontWeightLight,
    regular: fontWeightRegular,
    medium: fontWeightMedium,
    bold: fontWeightBold,
  };

  const gradientStyles = () => ({
    backgroundImage:
      color !== "inherit" &&
      color !== "text" &&
      color !== "white" &&
      gradients[color as keyof typeof gradients]
        ? linearGradient(
            gradients[color as keyof typeof gradients].main,
            gradients[color as keyof typeof gradients].state
          )
        : linearGradient(gradients.dark.main, gradients.dark.state),
    display: "inline-block",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: transparent.main,
    position: "relative",
    zIndex: 1,
  });

  const colorValue =
    color === "inherit" || !palette[color as keyof typeof palette]
      ? "inherit"
      : palette[color as keyof typeof palette].main;

  return {
    opacity,
    textTransform,
    verticalAlign,
    textDecoration: "none",
    color: colorValue,
    letterSpacing: "-0.125px",
    fontWeight: fontWeights[fontWeight as keyof typeof fontWeights],
    ...(textGradient && gradientStyles()),
  };
});

export default MKTypographyRoot;
