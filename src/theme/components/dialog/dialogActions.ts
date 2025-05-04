// theme/components/dialog/dialogActions.ts
import { Components } from "@mui/material/styles";
import pxToRem from "theme/functions/pxToRem";

const dialogActionsComponents: Components["MuiDialogActions"] = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
    },
  },
};

export default dialogActionsComponents;
