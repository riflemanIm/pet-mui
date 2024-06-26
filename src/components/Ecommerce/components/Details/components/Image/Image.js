import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Carousel } from "@trendyol-js/react-carousel";

const ImageView = ({ imgs, title }) => {
  const [current, setCurrent] = useState(imgs[0]);
  const imgPath = "/images/catalog/";
  const theme = useTheme();

  const downLg = useMediaQuery(theme.breakpoints.down("lg"), {
    defaultMatches: true,
  });
  const downMd = useMediaQuery(theme.breakpoints.down("md"), {
    defaultMatches: true,
  });
  const downSm = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  const showCarImgs = !downLg
    ? 7
    : downLg && !downMd
    ? 5
    : downMd && !downSm
    ? 6
    : 3;
  //console.log("isMd", isMd, "isLg", isLg);
  return (
    <Box>
      {current && (
        <Box
          sx={{
            marginBottom: 2,
            width: 1,
            height: "auto",
            "& img": {
              width: 1,
              height: 1,
              objectFit: "cover",
              borderRadius: 2,
            },
          }}
        >
          <Image
            src={`${imgPath}${current}`}
            alt={title}
            height={700}
            width={700}
            loading="lazy"
          />
        </Box>
      )}
      {imgs.length > 1 && (
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Carousel
            show={showCarImgs}
            slide={3}
            dynamic={true}
            responsive={true}
            swiping={true}
            rightArrow={
              <IconButton
                color="primary"
                aria-label="next image"
                sx={{ mt: 2 }}
              >
                <KeyboardArrowRightIcon />
              </IconButton>
            }
            leftArrow={
              <IconButton
                color="primary"
                aria-label="previos image"
                sx={{ mt: 2 }}
              >
                <KeyboardArrowLeftIcon />
              </IconButton>
            }
          >
            {imgs.map((item, i) => (
              <Box
                key={i}
                onClick={() => setCurrent(item)}
                sx={{
                  width: 80,
                  height: "auto",
                  cursor: "pointer",
                  "& img": {
                    width: 1,
                    height: 1,
                    objectFit: "cover",
                    borderRadius: 2,
                  },
                }}
              >
                <Image
                  src={`${imgPath}${item}`}
                  alt={title}
                  height={100}
                  width={100}
                />
              </Box>
            ))}
          </Carousel>
        </Stack>
      )}
    </Box>
  );
};

export default ImageView;
