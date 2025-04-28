import React from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { alpha } from "@mui/material/styles";

// Импорт изображений
import img1 from "assets/images/qq.jpg";
import img2 from "assets/images/1q.jpg";
import img3 from "assets/images/2q.jpg";
import img4 from "assets/images/3q.jpg";
import img5 from "assets/images/4q.jpg";

const slides = [
  {
    image: img1,
    title:
      "Правильное и сбалансированное питание — это основа здоровья и долголетия вашего питомца.",
    btnText: "в каталог",
    btnLink: "/catalog/1",
    sx: {
      position: "absolute",
      bottom: "0%",
      left: "3%",
      width: "52%",
      textAlign: "center",
      padding: "1rem",
      zIndex: 1000,
    },
  },
  {
    image: img2,
    title: "Мы готовы доставить наш продукт в любую точку России и мира",
    btnText: "в каталог",
    btnLink: "/catalog/2",
    sx: {
      position: "absolute",
      top: "50%",
      right: "-12%",
      width: "33%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      backgroundColor: "hsla(0, 30.40%, 95.50%, 0.70)",
      padding: "1rem",
      zIndex: 1000,
      borderRadius: 4,
    },
  },
  {
    image: img3,
    title: "10 причин, по которым выбирают именно нас!",
    subtitle: "100% натуральный продукт",
    btnText: "в каталог",
    btnLink: "/catalog/2",
    sx: {
      position: "absolute",
      top: "70%",
      left: "77%",
      width: "33%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "hsla(0, 30.40%, 95.50%, 0.70)",
      padding: "1rem",
      zIndex: 1000,
      borderRadius: 4,
    },
  },
  {
    image: img4,
    title: "Исключительно натуральные ингредиенты",
    subtitle:
      "Мы используем только натуральные и высококачественные продукты, которые соответствуют всем необходимым сертификатам и имеют все необходимые ветеринарные справки.",
    btnText: "в каталог",
    btnLink: "/catalog/2",
    sx: {
      position: "absolute",
      top: "70%",
      left: "50%",
      width: "83%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      backgroundColor: "hsla(0, 30.40%, 95.50%, 0.70)",
      padding: "1rem",
      zIndex: 1000,
      borderRadius: 4,
    },
  },
  {
    image: img5,
    title: "Технология",
    subtitle:
      "Мы производим натуральные лакомства и сбалансированные рационы для собак, не используя консерванты и химические добавки.",
    btnText: "в каталог",
    btnLink: "/catalog/2",
    sx: {
      position: "absolute",
      top: "40%",
      left: "22%",
      width: "33%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      backgroundColor: "hsla(0, 30.40%, 95.50%, 0.70)",
      padding: "1rem",
      zIndex: 1000,
      borderRadius: 4,
    },
  },
];

const NextArrow = (props) => {
  const { onClick, style } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        right: 2,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1500,
        bgcolor: "rgba(255,255,255,0.7)",
      }}
      size="large"
    >
      <ArrowForwardIosIcon fontSize="inherit" />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const { onClick, style } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        left: 2,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1500,
        bgcolor: "rgba(255,255,255,0.7)",
      }}
      size="large"
    >
      <ArrowBackIosIcon fontSize="inherit" />
    </IconButton>
  );
};

const ImageSlider = () => {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { arrows: false, dots: true },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { arrows: false, dots: false, autoplaySpeed: 5500 },
      },
    ],
  };

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{ "& .slick-dots": { zIndex: 5 } }}>
        <Slider {...settings}>
          {slides.map((slide, index) => {
            return (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 300, sm: 500 },
                  backgroundImage: `url(${slide.image.src || slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    ...slide.sx,
                    [theme.breakpoints.down("sm")]: {
                      width: "90%",
                      left: "50%",
                      bottom: "10%",
                      top: "auto",
                      transform: "translate(-50%, -50%)",
                      padding: "0.5rem",
                    },
                  }}
                >
                  {slide.title && (
                    <Typography
                      variant="h1"
                      component="h1"
                      sx={{
                        fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                        mb: 2,
                      }}
                    >
                      {slide.title}
                    </Typography>
                  )}
                  {slide.subtitle && (
                    <Typography
                      variant="h4"
                      component="h4"
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.2rem", md: "1.7rem" },
                        mb: 2,
                      }}
                    >
                      {slide.subtitle}
                    </Typography>
                  )}
                  {slide.btnLink && (
                    <Button
                      variant="contained"
                      color="primary"
                      href={slide.btnLink}
                      sx={{
                        fontSize: { xs: "0.75rem", sm: "1rem" },
                        py: { xs: 0.5, sm: 1 },
                        px: { xs: 1, sm: 2 },
                      }}
                    >
                      {slide.btnText}
                    </Button>
                  )}
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Box>
      <Box
        component="svg"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 100.1"
        sx={{
          width: "100%",
          position: "relative",
          top: {
            xs: theme.spacing(-3),
            sm: theme.spacing(-4.5),
            md: theme.spacing(-5),
            lg: theme.spacing(-5),
            xl: theme.spacing(-6),
          },
          zIndex: 2,
        }}
      >
        <path
          fill={theme.palette.background.level1}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        />
      </Box>
    </Box>
  );
};

export default ImageSlider;
