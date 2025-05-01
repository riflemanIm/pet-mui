import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import img1 from "assets/images/about4.jpg";
import img2 from "assets/images/accessoires/123.jpg";
import img3 from "assets/images/about5.jpg";
import img4 from "assets/images/accessoires/8,2-см.jpg";

const Gallery = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: img1.src,
      rows: 1,
      cols: 2,
    },
    {
      src: img2.src,
      rows: 1,
      cols: 1,
    },
    {
      src: img3.src,
      rows: 1,
      cols: 1,
    },
    {
      src: img4.src,
      rows: 1,
      cols: 2,
    },
  ];

  return (
    <Box>
      <ImageList
        variant="quilted"
        cols={3}
        rowHeight={isMd ? 300 : 200}
        gap={isMd ? 16 : 4}
      >
        {photos.map((item, i) => (
          <ImageListItem key={i} cols={item.cols} rows={item.rows}>
            <img
              height={"100%"}
              width={"100%"}
              src={item.src}
              alt="..."
              loading="lazy"
              style={{
                objectFit: "cover",
                filter:
                  theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
                cursor: "poiner",
                borderRadius: 8,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Gallery;
