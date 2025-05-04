// theme/components/stepper/stepConnector.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";

export function getStepConnectorComponents(
  theme: Theme
): Components["MuiStepConnector"] {
  const lineStyles: CSSObject = {
    borderWidth: `${theme.borders.borderWidth[2]} !important`,
    borderColor: theme.palette.text.disabled,
    opacity: 0.5,
  };
  return {
    styleOverrides: {
      root: {
        color: theme.palette.action.disabled,
        transition: "all 200ms linear",
        "&.Mui-active": { color: theme.palette.common.white },
        "&.Mui-completed": { color: theme.palette.common.white },
      },
      alternativeLabel: {
        top: "14%",
        left: "-50%",
        right: "50%",
      },
      line: lineStyles,
    },
  };
}
