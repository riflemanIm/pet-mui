import * as React from "react";
import type { ButtonProps } from "@mui/material/Button";

type MKButtonExtraProps = {
  circular?: boolean;
  iconOnly?: boolean;
  variant?: "text" | "contained" | "outlined" | "gradient";
  color?:
    | "default"
    | "white"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark";
};

export type MKButtonProps<C extends React.ElementType = "button"> = Omit<ButtonProps<C>, "variant" | "color"> &
  MKButtonExtraProps & {
    component?: C;
  };

declare function MKButton<C extends React.ElementType = "button">(
  props: MKButtonProps<C> & React.RefAttributes<any>
): React.ReactElement | null;

export default MKButton;
