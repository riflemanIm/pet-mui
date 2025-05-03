import { forwardRef, ReactNode } from "react";
import MKTypographyRoot from "components/MKTypography/MKTypographyRoot";

export type TypographyColor =
  | "inherit"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "light"
  | "dark"
  | "text"
  | "white";

export type TypographyWeight = false | "light" | "regular" | "medium" | "bold";
export type TypographyTransform =
  | "none"
  | "capitalize"
  | "uppercase"
  | "lowercase";
export type TypographyAlign =
  | "unset"
  | "baseline"
  | "sub"
  | "super"
  | "text-top"
  | "text-bottom"
  | "middle"
  | "top"
  | "bottom";

export interface MKTypographyProps {
  color?: TypographyColor;
  fontWeight?: TypographyWeight;
  textTransform?: TypographyTransform;
  verticalAlign?: TypographyAlign;
  textGradient?: boolean;
  opacity?: number;
  children: ReactNode;
  [key: string]: any;
}

const MKTypography = forwardRef<HTMLElement, MKTypographyProps>(
  (
    {
      color = "dark",
      fontWeight = false,
      textTransform = "none",
      verticalAlign = "unset",
      textGradient = false,
      opacity = 1,
      children,
      ...rest
    },
    ref
  ) => {
    const ownerState = {
      color,
      textTransform,
      verticalAlign,
      fontWeight,
      opacity,
      textGradient,
    };

    return (
      <MKTypographyRoot {...rest} ref={ref} ownerState={ownerState}>
        {children}
      </MKTypographyRoot>
    );
  }
);

MKTypography.displayName = "MKTypography";

export default MKTypography;
