/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
//import CardMedia from '@mui/material/CardMedia';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
//import { CardActionArea } from '@mui/material';
import img from "assets/images/pets.jpg";
import img1 from "assets/images/hero/25155454.jpg";
import img2 from "assets/images/puppies.jpg";
import img3 from "assets/images/big_small.jpg";
import img4 from "assets/images/taste.jpeg";

import img5 from "assets/images/hardness.jpg";
const mock = [
  {
    title: "Разработано для",
    subtitle: "Наши товары разработаны для конкретного вида питомца",
    icon: img.src,
    //href: '/catalog?homePageQueryState={"page":1,"type":"Treat","ages":"","taste":"","designedFor":"1","ingridient":"","hardness":"","packages":"","petSizes":"","sort":"","size":6}',
    href: '/catalog?homePageQueryState={"page":1,"type":"Treat","designedFor":"1"}',
  },
  {
    title: "Игридиенты",
    subtitle:
      "Вам следует изучить, какие продукты питания будут наиболее полезными для вашего питомца",
    icon: img1.src,
    href: '/catalog?homePageQueryState={"page":1,"type":"Treat","ingridient":"1,2,3"}',
  },
  {
    title: "Особые потребности",
    subtitle:
      "Здесь можно сделать акцент на определенной потребности для здоровья Вашего питомца ",
    icon: img2.src,
    href: '/catalog?homePageQueryState={"page":1,"type":"Treat","specialNeeds":"1,9"}',
  },
  {
    title: "Размер питомца",
    subtitle: "У нас есть ламомства для любого размера Вашего питомца",
    icon: img3.src,
    href: '/catalog?homePageQueryState={"page":1,"type":"Treat","petSizes":"1,2"}',
  },
  {
    title: "Вкус",
    subtitle: "Вкусняшки на любой вкус для Вашего питомца",
    icon: img4.src,
    href: '/catalog?homePageQueryState={"page":1,"type":"Treat","taste":"1,2,3"}',
  },
  {
    title: "Консистенция корма",
    subtitle: "Все, что вы хотели про влажные, тветдые, мягкие корма",
    icon: img5.src,
    href: '/catalog?homePageQueryState={"page":1,"type":"Treat","hardness":"1,2,3"}',
  },
];

const IndexViewCategories = () => {
  const theme = useTheme();
  return (
    <>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          color="text.primary"
          align={"center"}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
          mb={3}
        >
          Категории товаров
        </Typography>

        <Typography
          variant="h6"
          align={"center"}
          color={"text.secondary"}
          data-aos={"fade-up"}
        >
          На нашем сайте мы поможем Вам подобрать идельный балас питания
          <br />
          или выбрать просто вкусняшку для Вашего питомца
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={"a"}
              display={"block"}
              sx={{
                textDecoration: "none",
                transition: "all .2s ease-in-out",
                "&:hover": {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
              href={item.href ?? "/"}
              style={{ textDecoration: "none", height: "100%" }}
            >
              <Box
                component={Card}
                padding={4}
                borderRadius={2}
                width={1}
                height={1}
                data-aos={"fade-up"}
                data-aos-delay={i * 100}
                sx={{
                  "&:hover": {
                    backgroundColor: `${theme.palette.grey[100]} !important`,
                  },
                }}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  align={"center"}
                  justifyContent="center"
                >
                  <Box
                    component={Avatar}
                    width={200}
                    height={200}
                    marginBottom={2}
                    bgcolor={theme.palette.primary.main}
                    color={theme.palette.background.paper}
                    alignSelf="center"
                    src={item.icon}
                  />
                  <Typography
                    variant={"h6"}
                    gutterBottom
                    color="text.primary"
                    sx={{ fontWeight: 500 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default IndexViewCategories;
