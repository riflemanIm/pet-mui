// theme/components/appBar.ts
import { Components } from "@mui/material/styles";

export function getAppBarComponents(): Components["MuiAppBar"] {
  return {
    defaultProps: { color: "transparent" },
    styleOverrides: {
      root: { boxShadow: "none" },
    },
  };
}
