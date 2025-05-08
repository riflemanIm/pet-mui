import { forwardRef } from "react";
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";

const NextMuiLink = forwardRef(function NextMuiLink(props, ref) {
  // Забираем href и прокидываем его в NextLink + в MUI Link
  const { href, ...other } = props;
  return (
    <MuiLink
      component={NextLink}
      href={href}
      ref={ref}
      {...other}
    />
  );
});

export default NextMuiLink;
