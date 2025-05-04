// theme/components/buttonBase.ts
import { Components } from "@mui/material/styles";

export function getButtonBaseComponents(): Components["MuiButtonBase"] {
  return { defaultProps: { disableRipple: false } };
}
