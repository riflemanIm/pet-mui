import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";
import img from "assets/images/imgbin_cat-food-dog-ant-insect.png";
import img1 from "assets/images/hero/28512781.jpg";
import img2 from "assets/images/hero/25155454.jpg";
import img3 from "assets/images/hero/32019654.jpg";
import img4 from "assets/images/hero/49075129.jpg";
import img5 from "assets/images/hero/80523856.jpg";
import img6 from "assets/images/hero/54742642.jpg";
import img7 from "assets/images/hero/98293007.jpg";
import img8 from "assets/images/hero/98440207.jpg";
import img9 from "assets/images/hero/57706547.jpg";

import Container from "components/Container";

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
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,

        position: "relative",
      }}
    >
      <Box
        paddingY={{ xs: 0, sm: "4rem", md: "8rem" }}
        sx={{
          backgroundImage: `url("${img.src}")`,
          backgroundPosition: "center center",
          transform: "translate3d(0px,0px,0px)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Box maxWidth={{ xs: 1, sm: "50%" }}>
            {/* <Box
              component={"img"}
              src={img.src}
              alt="BAAAAHS"
              width={{ xs: 300, md: 580 }}
              marginBottom={{ xs: 1, sm: 2 }}
            /> */}
            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              The Big Ass Amazingly Awesome Homosexual Sheep (BAAAHS) is a
              mutant vehicle, a mobile disco, and a penetrable social statement.
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "flex-start" }}
              marginTop={4}
            >
              <Button
                component={"a"}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
                href={"/crew"}
              >
                Join the flock
              </Button>
              <Box
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                width={{ xs: "100%", md: "auto" }}
              >
                <Button
                  component={"a"}
                  href={"/about"}
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                >
                  Learn more
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            transform: "rotate(-20deg)",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Box
            display={"flex"}
            width={"50rem"}
            left={"55%"}
            top={0}
            position={"absolute"}
            sx={{ transform: "translate3d(20%, -50%, 0)" }}
          >
            {images.map((item, i) => (
              <Box key={i} marginTop={{ sm: -(i * 16) }} marginX={1}>
                {item.group.map((g, j) => (
                  <Box
                    key={j}
                    padding={1}
                    bgcolor={"background.paper"}
                    borderRadius={2}
                    boxShadow={3}
                    marginTop={2}
                  >
                    <Box
                      component={"img"}
                      loading="lazy"
                      src={
                        theme.palette.mode === "dark"
                          ? g.coverDark.src
                          : g.cover.src
                      }
                      height={1}
                      width={1}
                      maxWidth={320}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
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
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default Hero;
