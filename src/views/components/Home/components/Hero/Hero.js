import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";
import img from "assets/images/main.png";
import img1 from "assets/images/about2.jpg";
import img2 from "assets/images/about1.jpg";
import img3 from "assets/images/hero/32019654.jpg";
import img4 from "assets/images/accessoires/t-short.jpg";
import img5 from "assets/images/hero/80523856.jpg";
import img6 from "assets/images/hero/54742642.jpg";
import img7 from "assets/images/hero/98293007.jpg";
import img8 from "assets/images/hero/49075129.jpg";
import img9 from "assets/images/hero/57706547.jpg";

import Container from "components/Container";
import Image from "next/image";

const images = [
  {
    group: [
      {
        cover: img1,
        coverDark: img1,
      },
      {
        cover: img2,
        coverDark: img2,
      },
    ],
  },
  {
    group: [
      {
        cover: img3,
        coverDark: img3,
      },
      {
        cover: img4,
        coverDark: img4,
      },
      {
        cover: img5,
        coverDark: img5,
      },
    ],
  },
  {
    group: [
      {
        cover: img6,
        coverDark: img6,
      },
      {
        cover: img7,
        coverDark: img7,
      },
      {
        cover: img8,
        coverDark: img8,
      },
      {
        cover: img9,
        coverDark: img9,
      },
    ],
  },
];

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), {
    defaultMatches: true,
  });

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0
        )}, ${alpha(theme.palette.background.paper, 1)} 100%)`,

        position: "relative",
        zIndex: 1000,
      }}
    >
      <Box
        paddingY={{ xs: 0, sm: "4rem", md: "4rem" }}
        sx={(theme) => ({
          backgroundImage: `url("${img.src}")`,
          backgroundPosition: "left 49% bottom 0%",
          transform: "translate3d(0px,0px,0px)",
          backgroundSize: "32% auto",
          [theme.breakpoints.down("xl")]: {
            backgroundSize: "40% auto",
          },
          [theme.breakpoints.down("lg")]: {
            backgroundSize: "60% auto",
          },
          [theme.breakpoints.down("md")]: {
            backgroundSize: "75% auto",
          },

          backgroundRepeat: "no-repeat",
          zIndex: -1,
        })}
      >
        <Container>
          <Box maxWidth={{ xs: 1, md: "25%" }}>
            <Typography
              variant="h5"
              color="text.primary"
              sx={{
                fontWeight: 520,
                textShadow: "3px 2px 3px rgba(255,255,255,.4)",
                lineHeight: 1.6,
              }}
              marginTop={{ xs: 1, sm: 2, md: 2 }}
              marginBottom={{ xs: 38, sm: 64, md: 4 }}
              textAlign={{ xs: "center", md: "left" }}
            >
              Мы готовы доставить наш продукт в любую точку
              <br /> России и мира.
              <br /> Также у нас есть удобный вариант самовывоза для жителей
              Краснодара.
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              alignItems={{ xs: "stretched", md: "flex-start" }}
              marginTop={{ xs: 5, md: 4 }}
              justifyContent={{ xs: "center", md: "right" }}
            >
              <Button
                component={"a"}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={!isMobile}
                href={"/catalog"}
              >
                Каталог
              </Button>
              {/* <Box
                marginTop={{ xs: 2, md: 0 }}
                marginLeft={{ md: 2 }}
                width={{ xs: "100%", md: "auto" }}
              >
                <Button
                  component={"a"}
                  href={"/about"}
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth={isMobile ? false : true}
                >
                  Learn more
                </Button>
              </Box> */}
            </Box>
          </Box>
        </Container>
        {!isMobile && (
          <Box
            sx={{
              transform: "rotate(-30deg)",
            }}
          >
            <Box
              display={"flex"}
              width={"30rem"}
              left={"55%"}
              top={0}
              position={"absolute"}
              sx={{ transform: "translate3d(-7%, -10%, 0)" }}
            >
              {images.map((item, i) => (
                <Box key={i} marginTop={{ md: -(i * 9) }} marginX={1}>
                  {item.group.map((g, j) => (
                    <Box
                      key={j}
                      padding={1}
                      bgcolor={"background.paper"}
                      borderRadius={2}
                      boxShadow={3}
                      marginTop={2}
                      sx={{
                        width: 190,
                        height: 190,
                        cursor: "pointer",
                        "& img": {
                          width: 1,
                          height: 1,
                          objectFit: "cover",
                          borderRadius: 0.5,
                        },
                        transition: "all .2s ease-in-out",
                        "&:hover": {
                          transform: "rotate(30deg) scale(2)",
                          height: "auto",
                          padding: 0.5,
                          borderRadius: 0.1,
                          "& img": {
                            borderRadius: 0.2,
                          },
                        },
                      }}
                    >
                      <Image
                        src={
                          theme.palette.mode === "dark"
                            ? g.coverDark.src
                            : g.cover.src
                        }
                        height={310}
                        width={310}
                      />
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
      <Box
        component={"svg"}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: "100%",
          marginBottom: theme.spacing(-1),
          position: "relative",
          top: theme.spacing(-4.5),
          zIndex: -2,
        }}
      >
        <path
          fill={theme.palette.background.default}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default Hero;
