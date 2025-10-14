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

// Shepherd React examples
import RotatingCard from "components/Cards/RotatingCard";
import RotatingCardFront from "components/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "components/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "components/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid
          container
          item
          xs={11}
          spacing={3}
          alignItems="center"
          sx={{ mx: "auto" }}
        >
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Информация
                    <br />
                    Поддержка
                    <br />
                    Общение
                  </>
                }
                description="Официальное сообщество Кубтел ВКонтакте"
              />
              <RotatingCardBack
                image={bgBack}
                title="Кубань-Телеком ВКонтакте"
                description="Добро пожаловать в мир современных коммуникаций с компанией ООО «КУБАНЬ-ТЕЛЕКОМ»"
                action={{
                  type: "internal",
                  route: "https://vk.com/kubtel",
                  label: "go to vk.com/kubtel",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="announcement"
                  title="Информация на расстоянии клика"
                  description="Новости Кубань-Телеком. Домашний интернет и ТВ"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="live_tv"
                  title="Подробно на Кубтел ТВ"
                  description="Фильмы, сериалы, мультфильмы и ТВ-каналы в одном приложении, на разных устройствах. "
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="money_off"
                  title="Сначала попробуй, потом плати!"
                  description="Оформление заявки. Оставьте свои контакты, и наш менеджер обязательно свяжется с вами."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="card_giftcard"
                  title="Дарим 1000 рублей"
                  description="Просто посоветуйте знакомым, соседям или друзьям тоже подключиться к Кубтел"
                  action={{
                    route:
                      "https://shepherd-pet.ru/learning-lab/react/overview/datepicker/",
                    label: "Далее",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
