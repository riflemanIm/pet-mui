// theme/components/dialog/index.ts
import { Components, Theme } from "@mui/material/styles";
import { getDialogContentComponents } from "./dialogContent";
import { getDialogContentTextComponents } from "./dialogContentText";
import { getDialogTitleComponents } from "./dialogTitle";
import dialogActionsComponents from "./dialogActions";

/**
 * Generate MuiDialog component overrides with subcomponent overrides applied.
 * @param theme - The MUI theme object
 * @returns Components overrides for Dialog and its subcomponents
 */
export function getDialogComponents(theme: Theme): Components {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: theme.shape.borderRadius,
          boxShadow: theme.boxShadows.xxl,
        },
        paperFullScreen: {
          borderRadius: 0,
        },
      },
    },
    MuiDialogTitle: getDialogTitleComponents(theme),
    MuiDialogContent: getDialogContentComponents(theme),
    MuiDialogContentText: getDialogContentTextComponents(theme),
    MuiDialogActions: dialogActionsComponents,
  };
}
