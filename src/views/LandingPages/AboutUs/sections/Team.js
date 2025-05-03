/*
=========================================================
* Shepherd React - v2.1.0
=========================================================





 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Shepherd React examples
import HorizontalTeamCard from "components/Cards/TeamCards/HorizontalTeamCard";

// Images
// import team1 from "assets/images/team-5.jpg";
// import team2 from "assets/images/bruce-mars.jpg";
// import team3 from "assets/images/ivana-squares.jpg";
// import team4 from "assets/images/ivana-square.jpg";

import team1 from "assets/images/team/LLxas-lK8IE.jpg";
import team2 from "assets/images/team/excNbWI7_dE.jpg";
import team3 from "assets/images/team/team3.png";
import team4 from "assets/images/team/photo_2024-06-25_20-47-16.jpg";
import team5 from "assets/images/team/team5.png";
import team6 from "assets/images/team/photo_2024-06-25_20-12-42.jpg";
import team7 from "assets/images/team/photo_2024-06-25_19-26-16.jpg";
import team8 from "assets/images/team/team8.png";
import team9 from "assets/images/team/team9.png";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Наша команда
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Если у вас возникли вопросы, вы всегда можете связаться с нами!
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1.src}
                name="Теркулова Екатерина"
                position={{ color: "info", label: "ст.Новотитаровская" }}
                description={
                  <ul style={{ marginLeft: 15 }}>
                    <li>
                      Решение основных вопросов предприятия, связанных с
                      продвижением и рекламой
                    </li>
                    <li>
                      Взаимодействие с партнерами для получения обратной связи и
                      улучшения сервиса
                    </li>
                    <li>
                      <strong>Связаться: +7 989 777 2000</strong>
                    </li>
                    <li>E-mail: terkulova.e@s-pet.ru</li>
                  </ul>
                }
              />
            </MKBox>

            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3.src}
                name="Рязанова Юлия"
                position={{ color: "info", label: "г.Краснодар" }}
                description={
                  <ul style={{ marginLeft: 15 }}>
                    <li data-list="bullet">
                      Координация и контроль логистических процессов
                    </li>
                    <li data-list="bullet">
                      Обеспечение своевременности и эффективности снабжения
                    </li>
                    <li data-list="bullet">
                      Ведение переговоров и заключение договоров с поставщиками
                    </li>
                    <li data-list="bullet">Торговый представитель</li>
                    <li data-list="bullet">
                      <strong>Связаться: +7 918 044 92 53</strong>
                    </li>
                    <li data-list="bullet">
                      <strong>Связаться: +7 918 032 63 74</strong>
                    </li>
                    <li data-list="bullet">E-mail: ryazanova@s-pet.ru</li>
                  </ul>
                }
              />
            </MKBox>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4.src}
                name="Волкова Елена"
                position={{ color: "info", label: "г.Краснодар" }}
                description={
                  <ul style={{ marginLeft: 15 }}>
                    <li>Торговый представитель</li>
                    <li>
                      <strong>Связаться: +7 918 261 02 02</strong>
                    </li>
                    <li>E-mail: volkova.e@s-pet.ru</li>
                  </ul>
                }
              />
            </MKBox>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team8.src}
                name="Сурмач Екатерина"
                position={{ color: "info", label: "г.Краснодар" }}
                description={
                  <ul style={{ marginLeft: 15 }}>
                    <li data-list="bullet">Торговый представитель</li>
                    <li data-list="bullet">
                      <strong>Связаться: +7 928 422 11 18</strong>
                    </li>
                    <li data-list="bullet">E-mail: surmach.e@s-pet.ru</li>
                  </ul>
                }
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2.src}
                name="Акулова Юлия"
                position={{ color: "info", label: "г.Краснодар" }}
                description={
                  <ul style={{ marginLeft: 15 }}>
                    <li>Взаимодействие с поставщиками</li>
                    <li>Проведение переговоров и заключение контрактов</li>
                    <li>Торговый представитель</li>
                    <li>
                      <strong>Связаться: +7 988 520 06 51</strong>
                    </li>
                    <li>E-mail: akylovau@s-pet.ru</li>
                  </ul>
                }
              />
            </MKBox>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team5.src}
                name="Сафиуллин Андрей"
                position={{ color: "info", label: "г.Краснодар" }}
                description={
                  <ul style={{ marginLeft: 15 }}>
                    <li data-list="bullet">
                      Руководитель производственного отдела
                    </li>
                    <li data-list="bullet">
                      Обеспечение своевременности и эффективности снабжения
                    </li>
                    <li data-list="bullet">
                      Контроль качества технологических процессов
                    </li>
                    <li data-list="bullet">
                      <strong>Связаться: +7 988 242 24 26</strong>
                    </li>
                    <li data-list="bullet">E-mail: safiullin.a@s-pet.ru</li>
                  </ul>
                }
              />
            </MKBox>

            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team6.src}
                name="Ян Заяц"
                position={{
                  color: "info",
                  label: "г. Москва, Научный проезд, 12",
                }}
                description={
                  <ul style={{ marginLeft: 15 }}>
                    <li>Торговый представитель</li>
                    <li>
                      <strong>Связаться: +7 968 818 22 92</strong>
                    </li>
                    <li>E-mail: yan.marcovich@s-pet.ru</li>
                  </ul>
                }
              />
            </MKBox>

            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team7.src}
                name="Червинко Ирина"
                position={{ color: "info", label: "г.Краснодар" }}
                description={
                  <ul style={{ marginLeft: 15 }}>
                    <li>Торговый представитель</li>
                    <li>
                      <strong>Связаться: +7 959 191 48 50</strong>
                    </li>
                    <li>E-mail: chervinko@s-pet.ru</li>
                  </ul>
                }
              />
            </MKBox>

            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team9.src}
                name="Муравьёва Юлия"
                position={{ color: "info", label: "г.Краснодар" }}
                description={
                  <ul style={{ marginLeft: 15 }}>
                    <li>Торговый представитель</li>
                    <li>
                      <strong>Связаться: +7 918 385 55 45</strong>
                    </li>
                    <li>E-mail: muravyova@s-pet.ru</li>
                  </ul>
                }
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
