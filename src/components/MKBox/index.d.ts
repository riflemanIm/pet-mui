import * as React from "react";
import type { BoxProps } from "@mui/material/Box";

type MKBoxExtraProps = {
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
};

export type MKBoxProps<C extends React.ElementType = "div"> = Omit<BoxProps<C>, "component"> &
  MKBoxExtraProps & {
    component?: C;
  };

declare function MKBox<C extends React.ElementType = "div">(
  props: MKBoxProps<C> & React.RefAttributes<any>
): React.ReactElement | null;

export default MKBox;
