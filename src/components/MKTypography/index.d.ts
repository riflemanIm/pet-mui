import * as React from "react";
import type { TypographyProps } from "@mui/material/Typography";

type MKTypographyExtraProps = {
  color?: string;
  fontWeight?: "light" | "regular" | "medium" | "bold" | number | string | false;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | string;
  verticalAlign?: "unset" | "baseline" | "sub" | "super" | "text-top" | "text-bottom" | "middle" | "top" | "bottom" | string;
  textGradient?: boolean;
  opacity?: number;
};

export type MKTypographyProps<C extends React.ElementType = "span"> = Omit<TypographyProps<C>, "component"> &
  MKTypographyExtraProps & {
    component?: C;
  };

declare function MKTypography<C extends React.ElementType = "span">(
  props: MKTypographyProps<C> & React.RefAttributes<any>
): React.ReactElement | null;

export default MKTypography;
