import * as React from "react";
import type { BoxProps } from "@mui/material/Box";

export interface MKBoxProps extends BoxProps {
  variant?: "contained" | "gradient";
  bgColor?: string;
  color?: string;
  opacity?: number;
  borderRadius?: string;
  shadow?: string;
  coloredShadow?:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark"
    | "none";
}

declare const MKBox: React.ForwardRefExoticComponent<
  MKBoxProps & React.RefAttributes<any>
>;

export default MKBox;
