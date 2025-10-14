import * as React from "react";

export interface DefaultNavbarProps {
  routes: any;
  transparent?: boolean;
  light?: boolean;
  sticky?: boolean;
  relative?: boolean;
  center?: boolean;
}

declare function DefaultNavbar(props: DefaultNavbarProps): React.ReactElement | null;

export default DefaultNavbar;
