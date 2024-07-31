/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img from "assets/images/myPet.webp";

const mock = [
  {
    title: 300,
    subtitle: " ~300 довольных клиентов кадый день",
    suffix: "+",
  },
  {
    title: 45,
    subtitle: "45 филиалов по всей России",
    suffix: "+",
  },
  {
    title: 100,
    subtitle: "100% качество нашей продукции говорит само за себя",
    suffix: "%",
  },
];

const Features = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? "row" : "column-reverse"}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={"h4"} gutterBottom>
              Кто мы
            </Typography>
            <Typography variant={"h6"} component={"p"} color={"text.secondary"}>
              Компания Shepherd Pet предлагает любые кома и лакомства, которые
              помогут не просто кормить, но и дрессировать Вашего питомца. Мы
              помогаем каждый день нашим клиентам находить информацию,
              необходимую им для обеспечения наилучшей жизни своим питомцам.
              Наша команда авторов, в которую входят тренеры, ветеринарные
              специалисты и врачи ветеринарной медицины, создают и обновляют
              информативные статьи, полные ценных идей, отточенных на основе
              многолетнего практического опыта для питания и дрессировки.
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {mock.map((item, i) => (
              <Grid key={i} item xs={12} md={4}>
                <Typography variant="h4" color={"primary"} gutterBottom>
                  <VisibilitySensor
                    onChange={(isVisible) => setViewPortVisibility(isVisible)}
                    delayedCall
                  >
                    <CountUp
                      duration={2}
                      end={viewPortEntered ? item.title : 0}
                      start={0}
                      suffix={item.suffix}
                    />
                  </VisibilitySensor>
                </Typography>
                <Typography color="text.secondary" component="p">
                  {item.subtitle}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image={img.src}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
