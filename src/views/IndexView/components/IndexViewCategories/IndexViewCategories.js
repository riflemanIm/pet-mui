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
    href: '/catalog?homePageQueryState={"page":1,"type":"Treat","ingridient":"1"}',
  },
  {
    title: "Особые потребности",
    subtitle:
      "Здесь можно сделать акцент на определенной потребности для здоровья Вашего питомца ",
    icon: img2.src,
    href: '/catalog?homePageQueryState={"page":1,"type":"Treat","specialNeeds":"1"}',
  },
  {
    title: "Developer experience",
    subtitle:
      "Guaranteed to boost your productivity when building your app or website.",
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Continuous updates",
    subtitle: "We continually deploy improvements and new updates to theFront.",
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: "Free support",
    subtitle:
      "6 months of free technical support to help you build your website faster.",
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
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
          На нашем сайте мы вам поможем подобрать идельный балас продуктов,
          <br />
          или выбрать просто вкусняшку который подходить именно для Вашего
          питомца
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
              passHref
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
