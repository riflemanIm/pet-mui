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
import team3 from "assets/images/team/photo_2024-06-25_19-37-28.jpg";
import team4 from "assets/images/team/photo_2024-06-25_20-47-16.jpg";
import team5 from "assets/images/team/photo1720612393.jpeg";
import team6 from "assets/images/team/photo_2024-06-25_20-12-42.jpg";
import team7 from "assets/images/team/photo_2024-06-25_19-26-16.jpg";

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
                name="ст. Новотитаровская"
                position={{ color: "info", label: "UI Designer" }}
                description={
                  <ul style={{ marginLeft: 17 }}>
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
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2.src}
                name="William Pearce"
                position={{ color: "info", label: "Boss" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3.src}
                name="Ivana Flow"
                position={{ color: "info", label: "Athlete" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4.src}
                name="Marquez Garcia"
                position={{ color: "info", label: "JS Developer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
