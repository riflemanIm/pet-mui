// theme/components/iconButton.ts
import { Components } from "@mui/material/styles";
import { Theme } from "@mui/system";

export function getIconButtonComponents(
  theme: Theme
): Components["MuiIconButton"] {
  return {
    styleOverrides: {
      root: { "&:hover": { backgroundColor: theme.palette.transparent.main } },
    },
  };
}
