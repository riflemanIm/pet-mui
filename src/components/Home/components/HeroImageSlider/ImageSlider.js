import React from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { alpha } from "@mui/material";

// Импорт изображений
import img1 from "assets/images/qq.jpg";
import img2 from "assets/images/1q.jpg";
import img3 from "assets/images/2q.jpg";
import img4 from "assets/images/3q.jpg";
import img5 from "assets/images/4q.jpg";
import img6 from "assets/images/hero/54742642.jpg";
import img7 from "assets/images/hero/98293007.jpg";
import img8 from "assets/images/hero/49075129.jpg";
import img9 from "assets/images/hero/57706547.jpg";
import { borderRadius, borderRight } from "@mui/system";

// Массив с объединёнными данными для каждого слайда
const slides = [
  {
    image: img1,
    title:
      "Правильное и сбалансированное питание — это основа здоровья и долголетия вашего питомца.",
    subtitle: "",
    btnText: "в каталог",
    btnLink: "/catalog/1",
    sx: {
      position: "absolute",
      bottom: "0%",
      left: "28%",
      width: "52%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      //backgroundColor: "hsla(0, 30.40%, 95.50%, 0.70)",
      padding: "1rem",
      zIndex: 1000,
    },
  },
  {
    image: img2,
    title: "Мы готовы доставить наш продукт в любую точку России и мира",
    subtitle: "",
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
  // {
  //   image: img6,
  //   title: "Заголовок 6",
  //   subtitle: "Подзаголовок 6",
  //   btnText: "Узнать больше 6",
  //   btnLink: "/catalog/6",
  // },
  // {
  //   image: img7,
  //   title: "Заголовок 7",
  //   subtitle: "Подзаголовок 7",
  //   btnText: "Узнать больше 7",
  //   btnLink: "/catalog/7",
  // },
  // {
  //   image: img8,
  //   title: "Заголовок 8",
  //   subtitle: "Подзаголовок 8",
  //   btnText: "Узнать больше 8",
  //   btnLink: "/catalog/8",
  // },
  // {
  //   image: img9,
  //   title: "Заголовок 9",
  //   subtitle: "Подзаголовок 9",
  //   btnText: "Узнать больше 9",
  //   btnLink: "/catalog/9",
  // },
];

const NextArrow = (props) => {
  const { onClick, style } = props;
  return (
    <IconButton
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1500, // чтобы стрелочка была поверх
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      }}
      size="large"
    >
      <ArrowForwardIosIcon fontSize="inherit" color="primary" />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const { onClick, style } = props;
  return (
    <IconButton
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1500,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      }}
      size="large"
    >
      <ArrowBackIosIcon fontSize="inherit" color="primary" />
    </IconButton>
  );
};

const ImageSlider = () => {
  const theme = useTheme();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        position: "relative",
        padding: "2rem 0",
        overflow: "hidden",
      }}
    >
      <Box sx={{ "& .slick-dots": { zIndex: 5 } }}>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: "100%",
                height: 500,
                zIndex: -30,
                overflow: "hidden",
                backgroundImage: `url("${slide.image.src || slide.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <Box sx={slide.sx}>
                {slide.title && (
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{ fontSize: "3rem", mb: 2 }}
                  >
                    {slide.title}
                  </Typography>
                )}
                {slide.subtitle && (
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{ fontSize: "1.5rem", mb: 2 }}
                  >
                    {slide.subtitle}
                  </Typography>
                )}
                {slide.btnLink && (
                  <Button
                    variant="contained"
                    color="primary"
                    href={slide.btnLink}
                  >
                    {slide.btnText}
                  </Button>
                )}
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box
        component="svg"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: "100%",

          position: "relative",
          top: theme.spacing(-6),
          zIndex: 2,
        }}
      >
        <path
          fill={theme.palette.background.level1}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default ImageSlider;
