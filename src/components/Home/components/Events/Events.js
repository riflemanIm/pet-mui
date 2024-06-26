import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
//import Button from '@mui/material/Button';
//import useMediaQuery from '@mui/material/useMediaQuery';
//import { useTheme } from '@mui/material/styles';
import HorizontallyAlignedBlogCardWithShapedImage from "./HorizontallyAlignedBlogCardWithShapedImage";

const Events = () => {
  //const theme = useTheme();
  /*const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });*/

  return (
    <Box>
      <Typography
        variant="h4"
        color="text.primary"
        align={"center"}
        gutterBottom
        sx={{
          fontWeight: 700,
        }}
      >
        Новости и события
      </Typography>
      <HorizontallyAlignedBlogCardWithShapedImage />
    </Box>
  );
};

export default Events;
