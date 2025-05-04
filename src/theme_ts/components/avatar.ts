// theme/components/avatar.ts
import { Components } from "@mui/material/styles";
import borders from "theme/base/borders";

export function getAvatarComponents(): Components["MuiAvatar"] {
  const { borderRadius } = borders;
  return {
    styleOverrides: {
      root: { transition: "all 200ms ease-in-out" },
      rounded: { borderRadius: borderRadius.lg },
      img: { height: "auto" },
    },
  };
}
