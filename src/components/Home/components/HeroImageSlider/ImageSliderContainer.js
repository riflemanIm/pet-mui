import React, { Component } from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { withTheme } from "@mui/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { alpha } from "@mui/material";

// Импорт изображений
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

// Массив с объединёнными данными для каждого слайда
const slides = [
  {
    image: img1,
    title: "Заголовок 1",
    subtitle: "Подзаголовок 1",
    btnText: "Узнать больше 1",
    btnLink: "/catalog/1",
  },
  {
    image: img2,
    title: "Заголовок 2",
    subtitle: "Подзаголовок 2",
    btnText: "Узнать больше 2",
    btnLink: "/catalog/2",
  },
  {
    image: img3,
    title: "Заголовок 3",
    subtitle: "Подзаголовок 3",
    btnText: "Узнать больше 3",
    btnLink: "/catalog/3",
  },
  {
    image: img4,
    title: "Заголовок 4",
    subtitle: "Подзаголовок 4",
    btnText: "Узнать больше 4",
    btnLink: "/catalog/4",
  },
  {
    image: img5,
    title: "Заголовок 5",
    subtitle: "Подзаголовок 5",
    btnText: "Узнать больше 5",
    btnLink: "/catalog/5",
  },
  {
    image: img6,
    title: "Заголовок 6",
    subtitle: "Подзаголовок 6",
    btnText: "Узнать больше 6",
    btnLink: "/catalog/6",
  },
  {
    image: img7,
    title: "Заголовок 7",
    subtitle: "Подзаголовок 7",
    btnText: "Узнать больше 7",
    btnLink: "/catalog/7",
  },
  {
    image: img8,
    title: "Заголовок 8",
    subtitle: "Подзаголовок 8",
    btnText: "Узнать больше 8",
    btnLink: "/catalog/8",
  },
  {
    image: img9,
    title: "Заголовок 9",
    subtitle: "Подзаголовок 9",
    btnText: "Узнать больше 9",
    btnLink: "/catalog/9",
  },
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

class ImageSlider extends Component {
  render() {
    const { theme } = this.props;
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
      <Container>
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
          <Typography
            variant="h5"
            color="text.primary"
            textAlign="center"
            sx={{ marginBottom: "1rem", fontWeight: 600 }}
          >
            Мы готовы доставить наш продукт в любую точку России и мира.
          </Typography>
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
                    borderRadius: 4,
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "0%",
                      right: "2%",
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                      color: "#fff",
                      backgroundColor: "hsla(0, 30.40%, 95.50%, 0.70)",
                      padding: "1rem",
                      zIndex: 1000,
                    }}
                  >
                    {/* <Typography
                  variant="h1"
                  component="h1"
                  sx={{ fontSize: "3rem", mb: 2 }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{ fontSize: "1.5rem", mb: 2 }}
                >
                  {slide.subtitle}
                </Typography> */}
                    <Button
                      variant="contained"
                      color="primary"
                      href={slide.btnLink}
                    >
                      {slide.btnText}
                    </Button>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
          {/* <Box textAlign="center" marginTop="2rem">
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/catalog"
          >
            Каталог
          </Button>
        </Box> */}
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
              top: theme.spacing(-4),
              zIndex: 2,
              borderRadius: "0 0 24px 24px ",
            }}
          >
            <path
              fill={theme.palette.background.level1}
              d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
            ></path>
          </Box>
        </Box>
      </Container>
    );
  }
}

export default withTheme(ImageSlider);
