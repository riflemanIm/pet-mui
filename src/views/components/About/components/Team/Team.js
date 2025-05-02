import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import FacebookIcon from "@mui/icons-material/Facebook";
import img1 from "assets/images/team/LLxas-lK8IE.jpg";
import img2 from "assets/images/team/excNbWI7_dE.jpg";
import img3 from "assets/images/team/photo_2024-06-25_19-37-28.jpg";
import img4 from "assets/images/team/photo_2024-06-25_20-47-16.jpg";
import img5 from "assets/images/team/photo1720612393.jpeg";
import img6 from "assets/images/team/photo_2024-06-25_20-12-42.jpg";
import img7 from "assets/images/team/photo_2024-06-25_19-26-16.jpg";

const mock = [
  {
    name: "Теркулова Екатерина",
    title: "ст. Новотитаровская",
    avatar: img1.src,
    about: (
      <ul style={{ marginRight: 10 }}>
        <li>
          Решение основных вопросов предприятия, связанных с продвижением и
          рекламой
        </li>
        <li>
          Взаимодействие с партнерами для получения обратной связи и улучшения
          сервиса
        </li>
        <li>
          <strong>Связаться: +7 989 777 2000</strong>
        </li>
        <li>E-mail: terkulova.e@s-pet.ru</li>
      </ul>
    ),
  },
  {
    name: "Акулова Юлия",
    title: "г.Краснодар",
    avatar: img2.src,
    about: (
      <ul>
        <li>Взаимодействие с поставщиками</li>
        <li>Проведение переговоров и заключение контрактов</li>
        <li>Торговый представитель</li>
        <li>
          <strong>Связаться: +7 988 520 06 51</strong>
        </li>
        <li>E-mail: akylovau@s-pet.ru</li>
      </ul>
    ),
  },
  {
    name: "Красикова Елена",
    title: "г.Краснодар",
    avatar: img3.src,
    about: (
      <ul>
        <li>Координация и контроль логистических процессов</li>
        <li>Обеспечение своевременности и эффективности снабжения</li>
        <li>Ведение переговоров и заключение договоров с поставщиками</li>
        <li>
          <strong>Связаться: +7 918 467 30 86</strong>
        </li>
        <li>E-mail: krasikova.e@s-pet.ru</li>
      </ul>
    ),
  },
  {
    name: "Волкова Елена",
    title: "г.Краснодар",
    avatar: img4.src,
    about: (
      <ul>
        <li>Торговый представитель</li>
        <li>
          <strong>Связаться: +7 918 261 02 02</strong>
        </li>
        <li>E-mail: volkova.e@s-pet.ru</li>
      </ul>
    ),
  },

  {
    name: "Матусяк Игорь",
    title: "г.Краснодар",
    avatar: img5.src,
    about: (
      <ul>
        <li>Торговый представитель</li>
        <li>
          <strong>Связаться: +7 909 460-36-71</strong>
        </li>
        <li>E-mail: matusiak@s-pet.ru</li>
      </ul>
    ),
  },
  {
    name: "Ян Заяц",
    title: "г. Москва, Научный проезд, 12",
    avatar: img6.src,
    about: (
      <ul>
        <li>Торговый представитель</li>
        <li>
          <strong>Связаться: +7 968 818 22 92</strong>
        </li>
        <li>E-mail: yan.marcovich@s-pet.ru</li>
      </ul>
    ),
  },
  {
    name: "Червинко Ирина",
    title: "г.Краснодар",
    avatar: img7.src,
    about: (
      <ul>
        <li>Торговый представитель</li>
        <li>
          <strong>Связаться: +7 959 191 48 50</strong>
        </li>
        <li>E-mail: chervinko@s-pet.ru</li>
      </ul>
    ),
  },
];

const Team = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"text.secondary"}
          align={"center"}
        >
          Наша команда
        </Typography>
        <Typography fontWeight={700} variant={"h4"} align={"center"}>
          Доверяйте профессионалам
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Box
              component={Card}
              boxShadow={2}
              sx={{
                minHeight: 600,
                textDecoration: "none",
                transition: "all .2s ease-in-out",
                "&:hover": {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <CardContent>
                <Box
                  component={Avatar}
                  src={item.avatar}
                  mx="auto"
                  sx={(theme) => ({
                    height: 210,
                    width: 210,
                    [theme.breakpoints.down("lg")]: {
                      height: 170,
                      width: 170,
                    },
                    [theme.breakpoints.down("md")]: {
                      height: 210,
                      width: 210,
                    },
                    filter: "grayscale(1)",
                  })}
                />
                <Box marginTop={4}>
                  <ListItemText primary={item.name} secondary={item.title} />
                  <Typography
                    component="div"
                    variant={"subtitle2"}
                    color={"text.secondary"}
                    sx={{
                      "& > ul": {
                        margin: 1,
                        border: "none",
                      },
                      "& > ul,li": {
                        paddingLeft: 1,
                        paddingTop: 0.7,
                        border: "none",
                      },
                    }}
                  >
                    {item.about}
                  </Typography>
                  {/* <Box marginTop={4}>
                    <IconButton size={"small"} color={"primary"}>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton size={"small"} color={"primary"}>
                      <GitHubIcon />
                    </IconButton>
                    <IconButton size={"small"} color={"primary"}>
                      <TwitterIcon />
                    </IconButton> 
                  </Box>*/}
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
