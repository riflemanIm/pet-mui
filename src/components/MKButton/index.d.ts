import * as React from "react";
import type { ButtonProps } from "@mui/material/Button";

export interface MKButtonProps extends ButtonProps {
  circular?: boolean;
  iconOnly?: boolean;
}

declare const MKButton: React.ForwardRefExoticComponent<
  MKButtonProps & React.RefAttributes<any>
>;

export default MKButton;
