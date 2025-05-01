/*
=========================================================
* Kubtel 2 React - v2.1.0
=========================================================





 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Kubtel 2 React components
import MKBox from "components/MKBox";

// Kubtel 2 React examples
import DefaultCounterCard from "components/Cards/CounterCards/DefaultCounterCard";
import MKButton from "components/MKButton";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} sm={6} md={3} mb={3} textAlign="center">
            <DefaultCounterCard
              count={500}
              suffix="₽/мес"
              description="до 100 мбит/с"
            />
            <MKButton variant="gradient" color="info">
              подключиться
            </MKButton>
          </Grid>
          <Grid item xs={12} sm={6} md={3} mb={3} textAlign="center">
            <DefaultCounterCard
              count={550}
              suffix="₽/мес"
              description="до 100 мбит/с + TV"
            />
            <MKButton variant="gradient" color="info">
              подключиться
            </MKButton>
          </Grid>
          <Grid item xs={12} sm={6} md={3} mb={3} textAlign="center">
            <DefaultCounterCard
              count={890}
              suffix="₽/мес"
              description="в частный дом до 100Мбит/c"
            />
            <MKButton variant="gradient" color="info">
              подключиться
            </MKButton>
          </Grid>

          <Grid item xs={12} sm={6} md={3} mb={3} textAlign="center">
            <DefaultCounterCard
              count={990}
              suffix="₽/мес"
              description="в частный дом до 100Мбит/c + TV"
            />
            <MKButton variant="gradient" color="info">
              подключиться
            </MKButton>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
