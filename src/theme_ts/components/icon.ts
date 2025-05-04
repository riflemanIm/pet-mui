// theme/components/icon.ts
import { Components } from "@mui/material/styles";
import pxToRem from "theme/functions/pxToRem";

export function getIconComponents(): Components["MuiIcon"] {
  return {
    defaultProps: {
      baseClassName: "material-icons-round",
      fontSize: "inherit",
    },
    styleOverrides: {
      fontSizeInherit: { fontSize: "inherit !important" },
      fontSizeSmall: { fontSize: `${pxToRem(20)} !important` },
      fontSizeLarge: { fontSize: `${pxToRem(36)} !important` },
    },
  };
}
