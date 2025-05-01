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

//
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import HandCounter from "components/HandCounter";
// Presentation page components
//import TariffCard from "views/Presentation/components/TariffCard";
import TariffModale from "views/Presentation/components/TariffModale";

// Data
import DefaultCounterCard from "components/Cards/CounterCards/DefaultCounterCard";
import { Divider, Icon, Switch } from "@mui/material";

function GonfiguratorTariff() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="выберите тариф"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Конфигуратор услуг
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Здесь Вы можете выбрать необходимый набор услуг оборудования
            используя опции ниже
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: { xs: 8, lg: 12 } }}>
        <Grid container spacing={3} xs={12} lg={11} mx="auto">
          <Grid item xs={12} lg={9} sx={{ mt: 3, px: { xs: 0, lg: 8 } }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <MKTypography
                  variant="h5"
                  color="secondary"
                  fontWeight="bold"
                  mb={2}
                >
                  Доступ в сеть Интернет
                </MKTypography>
                <Switch
                // checked={checked} onChange={handleChecked}
                />
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                  // onClick={handleChecked}
                >
                  Интернет в частный дом
                </MKTypography>
                <MKTypography
                  component="span"
                  fontWeight="regular"
                  color="info"
                >
                  <Icon>info</Icon>
                </MKTypography>
              </Grid>
              <Grid item xs={12} md={6} textAlign="right">
                <MKTypography variant="h5" color="secondary" fontWeight="bold">
                  500
                </MKTypography>
              </Grid>
            </Grid>

            <MKTypography
              variant="h5"
              color="secondary"
              fontWeight="bold"
              mt={3}
              mb={2}
            >
              Устройства
            </MKTypography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} display="flex" alignItems="center">
                <Switch
                // checked={checked} onChange={handleChecked}
                />
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                  // onClick={handleChecked}
                >
                  Маршрутизатор SNR-CPE-ME2-Lite
                </MKTypography>
              </Grid>
              <Grid item xs={6} md={3}>
                <HandCounter />
              </Grid>
              <Grid item xs={6} md={3} textAlign="right">
                <MKTypography variant="h5" color="secondary" fontWeight="bold">
                  4 000
                </MKTypography>
              </Grid>
              <Grid item xs={12} md={6} display="flex" alignItems="center">
                <Switch
                // checked={checked} onChange={handleChecked}
                />
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                  // onClick={handleChecked}
                >
                  Маршрутизатор SNR-CPE-W4N 2.4ГГц
                </MKTypography>
              </Grid>
              <Grid item xs={6} md={3}>
                <HandCounter />
              </Grid>
              <Grid item xs={6} md={3} textAlign="right">
                <MKTypography variant="h5" color="secondary" fontWeight="bold">
                  4 000
                </MKTypography>
              </Grid>
            </Grid>

            <MKTypography
              variant="h5"
              color="secondary"
              fontWeight="bold"
              mt={3}
              mb={2}
            >
              Интерактивное ТВ
            </MKTypography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} display="flex" alignItems="center">
                <Switch
                // checked={checked} onChange={handleChecked}
                />
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                  // onClick={handleChecked}
                >
                  Базовый пакет 172 канала
                </MKTypography>
              </Grid>

              <Grid item xs={12} md={6} textAlign="right">
                <MKTypography variant="h5" color="secondary" fontWeight="bold">
                  50
                </MKTypography>
              </Grid>

              <Grid item xs={12} md={6} display="flex" alignItems="center">
                <Switch
                // checked={checked} onChange={handleChecked}
                />
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                  // onClick={handleChecked}
                >
                  Настрой кино 5 каналов
                </MKTypography>
              </Grid>

              <Grid item xs={12} md={6} textAlign="right">
                <MKTypography variant="h5" color="secondary" fontWeight="bold">
                  319
                </MKTypography>
              </Grid>

              <Grid item xs={12} md={6} display="flex" alignItems="center">
                <Switch
                // checked={checked} onChange={handleChecked}
                />
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                  // onClick={handleChecked}
                >
                  Матч Премьер 2 канала
                </MKTypography>
              </Grid>
              <Grid item xs={12} md={6} textAlign="right">
                <MKTypography variant="h5" color="secondary" fontWeight="bold">
                  219
                </MKTypography>
              </Grid>

              <Grid item xs={12} md={6} display="flex" alignItems="center">
                <Switch
                // checked={checked} onChange={handleChecked}
                />
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                  // onClick={handleChecked}
                >
                  Матч футбол 3 канала
                </MKTypography>
              </Grid>
              <Grid item xs={12} md={6} textAlign="right">
                <MKTypography variant="h5" color="secondary" fontWeight="bold">
                  380
                </MKTypography>
              </Grid>

              <Grid item xs={12}>
                <MKTypography variant="h6" color="secondary" fontWeight="bold">
                  Устройства для ТВ
                </MKTypography>
              </Grid>

              <Grid item xs={12} md={6} display="flex" alignItems="center">
                <Switch
                // checked={checked} onChange={handleChecked}
                />
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                  // onClick={handleChecked}
                >
                  ТВ-приставка 4K IPTV Vermax UHD300X
                </MKTypography>
              </Grid>
              <Grid item xs={6} md={3}>
                <HandCounter />
              </Grid>
              <Grid item xs={6} md={3} textAlign="right">
                <MKTypography variant="h5" color="secondary" fontWeight="bold">
                  4 000
                </MKTypography>
              </Grid>

              <Grid item xs={12} md={6} display="flex" alignItems="center">
                <Switch
                  // checked={checked} onChange={handleChecked}
                  defaultChecked={true}
                />
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                  // onClick={handleChecked}
                >
                  Единый доступ на разных устройствах
                </MKTypography>
              </Grid>
              <Grid item xs={6} md={3}>
                <HandCounter />
              </Grid>
              <Grid item xs={6} md={3} textAlign="right">
                <MKTypography variant="h5" color="secondary" fontWeight="bold">
                  0
                </MKTypography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3}>
            <MKBox
              position="sticky"
              bgColor="grey-100"
              borderRadius="xl"
              top="100px"
              p={{ xs: 1, lg: 3 }}
            >
              <MKTypography variant="h5" color="secondary" fontWeight="bold">
                Абонентская плата:
              </MKTypography>
              <DefaultCounterCard count={500} suffix="р/мес" />
              <Divider />
              <MKTypography variant="h6" color="secondary" fontWeight="bold">
                Единовременный платеж:
              </MKTypography>
              <DefaultCounterCard count={0} suffix="р/мес" color="secondary" />
              <Divider sx={{ my: 0 }} />

              <TariffModale />
              <MKTypography
                variant="body2"
                fontWeight="regular"
                color="secondary"
                sx={{ fontSize: 13 }}
              >
                Нажимая на кнопку, я соглашаюсь на обработку персональных данных
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default GonfiguratorTariff;
