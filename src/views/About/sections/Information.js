/*
=========================================================
* Shepherd React - v2.1.0
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Grid2";

//
import MKBox from "components/MKBox";

// Shepherd React examples
import DefaultInfoCard from "components/Cards/InfoCards/DefaultInfoCard";

import CenteredBlogCard from "components/Cards/BlogCards/CenteredBlogCard";
import img from "assets/images/accessoires/123.jpg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid2 container spacing={3} alignItems="center">
          <Grid2 size={{ xs: 12, lg: "grow" }}>
            <Grid2 container justifyContent="flex-start">
              <Grid2 size={{ xs: 12, md: 6 }}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="eco"
                    title="Исключительно натуральные ингредиенты"
                    description="Мы используем только натуральные и высококачественные продукты, которые соответствуют всем необходимым сертификатам и имеют все необходимые ветеринарные справки."
                  />
                </MKBox>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="science"
                    title="Технология"
                    description="Мы производим натуральные лакомства и сбалансированные рационы для собак, не используя консерванты и химические добавки."
                  />
                </MKBox>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="timeline"
                    title="Этапы"
                    description="Наш продукт тщательно проверяется и проходит все необходимые этапы очистки, прежде чем попасть к вашему питомцу. Мы заботимся о качестве и вашем доверии."
                  />
                </MKBox>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="health_and_safety"
                    title="Витаминные добавки"
                    description="Правильное и сбалансированное питание — это основа здоровья вашего питомца. Мы изготавливаем витаминные добавки исключительно из натуральных ингредиентов, что позволяет укрепить иммунитет."
                  />
                </MKBox>
              </Grid2>

              <Grid2 size={{ xs: 12, md: 6 }}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="pets"
                    title="Амуниция"
                    description="Изготовлена из высококачественных материалов вручную. Она прослужит вам долго, обеспечивая безопасность вашего питомца."
                  />
                </MKBox>
              </Grid2>

              <Grid2 size={{ xs: 12, md: 6 }}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="verified"
                    title="Качество"
                    description="Мы тщательно контролируем каждую поставку, чтобы быть уверенными в свежести наших продуктов. Мы всегда открыты для наших покупателей и с радостью поделимся с вами секретами приготовления. Ваше доверие — наша главная цель!"
                  />
                </MKBox>
              </Grid2>

              <Grid2 size={{ xs: 12, md: 6 }}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="spa"
                    title="Полезное и натуральное"
                    description="В каждом кусочке, благодаря специальной технологии приготовления, сохраняются все полезные свойства продуктов, что особенно важно для наших питомцев. Процесс сушки при низких температурах позволяет сберечь всё, что необходимо для их здоровья."
                  />
                </MKBox>
              </Grid2>

              <Grid2 size={{ xs: 12, md: 6 }}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="restaurant_menu"
                    title="Каждодневные рационы"
                    description="С нами кормить вашего питомца натуральным мясом станет простым и удобным занятием. Мы развеем миф о том, что натуральное питание — это сложно."
                  />
                </MKBox>
              </Grid2>

              <Grid2 size={{ xs: 12, md: 6 }}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="tune"
                    title="Баланс"
                    description="Наши сбалансированные рационы, составленные из тщательно подобранных ингредиентов, помогут вам кормить вашего любимца, не нарушая его естественный баланс."
                  />
                </MKBox>
              </Grid2>

              <Grid2 size={{ xs: 12, md: 6 }}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="weekend"
                    title="Комфорт"
                    description="Удобная упаковка позволит вам делать запасы на длительный срок. А быстрый формат приготовления и кормления особенно оценят занятые люди, которые ценят своё время!"
                  />
                </MKBox>
              </Grid2>
            </Grid2>
          </Grid2>
          <Grid2
            size={{ xs: 12, lg: 4 }}
            sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}
            alignSelf="flex-start"
          >
            <CenteredBlogCard
              image={img.src}
              title="10 причин, по которым выбирают именно нас!"
              description="100% натуральный продукт. Мы заботимся о здоровье ваших питомцев вместе. Спасибо, что выбрали нас!"
              action={{
                type: "internal",
                route: "/catalog",
                color: "info",
                label: "Каталог",
              }}
            />
          </Grid2>
        </Grid2>
      </Container>
    </MKBox>
  );
}

export default Information;
