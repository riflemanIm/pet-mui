import React, { FC } from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface HeadlineProp {
  head: string;
  subhead1?: string;
  subhead2?: string;
  align?: "left" | "center";
}
const Headline: FC<HeadlineProp> = ({
  head,
  subhead1,
  subhead2,
  align = "center",
}: HeadlineProp) => {
  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        "&::after": {
          position: "absolute",
          content: '""',
          width: "30%",
          zIndex: 1,
          top: 0,
          right: 0,
          height: "100%",
          backgroundSize: "18px 18px",
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      })}
    >
      <Box position="relative" zIndex={2}>
        <Typography fontWeight={600} variant={"h2"} gutterBottom align={align}>
          {head}
        </Typography>
        {subhead1 && (
          <Typography
            variant="h6"
            color={"text.secondary"}
            align={align}
            gutterBottom
          >
            {subhead1}
          </Typography>
        )}
        {subhead2 && (
          <Typography variant="h6" color={"text.secondary"} align={align}>
            {subhead2}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Headline;
