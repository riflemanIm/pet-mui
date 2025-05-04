// theme/components/container.ts
import { Components, Theme } from "@mui/material/styles";
import pxToRem from "theme/functions/pxToRem";
import breakpoints from "theme/base/breakpoints";

export default function getContainerComponents(
  theme: Theme
): Components["MuiContainer"] {
  const { values } = breakpoints;
  const shared = {
    paddingRight: `${pxToRem(24)} !important`,
    paddingLeft: `${pxToRem(24)} !important`,
    marginRight: "auto !important",
    marginLeft: "auto !important",
    width: "100% !important",
    position: "relative" as const,
  };
  return {
    styleOverrides: {
      root: Object.assign({}, shared, { maxWidth: `540px !important` }),
      // sm, md, lg, xl, xxl handled via responsive theme overrides
    },
  };
}
