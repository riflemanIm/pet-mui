import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Card from "@mui/material/Card";
import Grid2 from "@mui/material/Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "components/Container";
import DefaultFooter from "components/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import footerRoutes from "assets/footer.routes";
import routes from "assets/routes";
import bgImage from "assets/images/bg-about-us.jpg";
import declarationLaminariaImage from "assets/images/docs/declaration-laminaria.webp";
import declarationSalmonOilImage from "assets/images/docs/declaration-salmon-oil.webp";
import declarationYeastAminoImage from "assets/images/docs/declaration-yeast-amino.webp";
import vetLaminariaImage from "assets/images/docs/vet-laminaria.webp";
import vetSalmonOilImage from "assets/images/docs/vet-salmon-oil.webp";
import vetYeastAminoImage from "assets/images/docs/vet-yeast-amino.webp";

const documentsSource = "https://shepherd-pet.ru/documents";

const declarationDocuments = [
  {
    title: "Лакомство для собак с ламинарией",
    description:
      "Декларация о соответствии принята на основании протокола 67728 от 01.08.2023.",
    image: declarationLaminariaImage,
  },
  {
    title: "Лакомство для собак с лососевым маслом",
    description:
      "Декларация о соответствии принята на основании протокола 67729 от 01.08.2023.",
    image: declarationSalmonOilImage,
  },
  {
    title: "Лакомство для собак с пивными дрожжами и аминокислотами",
    description:
      "Декларация о соответствии принята на основании протокола 67730 от 01.08.2023.",
    image: declarationYeastAminoImage,
  },
];

const veterinaryDocuments = [
  {
    title: "Лакомство для собак с ламинарией",
    description:
      "Для каждой партии товара предоставляются ветеринарные справки.",
    image: vetLaminariaImage,
  },
  {
    title: "Лакомство для собак с лососевым маслом",
    description:
      "Для каждой партии товара предоставляются ветеринарные справки.",
    image: vetSalmonOilImage,
  },
  {
    title: "Лакомство для собак с пивными дрожжами и аминокислотами",
    description:
      "Для каждой партии товара предоставляются ветеринарные справки.",
    image: vetYeastAminoImage,
  },
];

const renderAccordionList = (title, description, items) => (
  <MKBox>
    <MKTypography variant="h4" mb={1.5}>
      {title}
    </MKTypography>
    <MKTypography variant="body2" color="text" opacity={0.8} mb={2}>
      {description}
    </MKTypography>
    {items.map((item) => (
      <Accordion
        key={item.title}
        disableGutters
        elevation={0}
        sx={{
          mb: 1.5,
          border: (theme) => `1px solid ${theme.palette.grey[300]}`,
          "&:before": { display: "none" },
          borderRadius: "0.75rem !important",
          overflow: "hidden",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            backgroundColor: ({ palette }) => palette.grey[100],
          }}
        >
          <MKTypography variant="h6">{item.title}</MKTypography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 2 }}>
          <Card
            sx={{
              p: 2,
              border: 0,
              boxShadow: "none",
            }}
          >
            <MKTypography variant="body2" color="text" opacity={0.9} mb={2}>
              {item.description}
            </MKTypography>
            <MKBox
              component="img"
              src={item.image.src}
              alt={item.title}
              sx={{
                width: "100%",
                display: "block",
                borderRadius: 1.5,
                border: ({ palette }) => `1px solid ${palette.grey[300]}`,
                mb: 2,
              }}
            />
            {/* <MKButton
              component="a"
              href={documentsSource}
              target="_blank"
              rel="noreferrer"
              color="info"
              size="small"
              variant="outlined"
            >
              Открыть документ на сайте
            </MKButton> */}
          </Card>
        </AccordionDetails>
      </Accordion>
    ))}
  </MKBox>
);

const Docs = () => {
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox
        minHeight="45vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.65),
              rgba(gradients.dark.state, 0.65),
            )}, url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid2
            container
            size={{ xs: 12, lg: 9 }}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Документы
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.85}
              mt={1}
              mb={1}
            >
              Компания ООО «ШЕПАРД ПЕТ». Товарный знак SHEPHERD.
            </MKTypography>
            {/* <MKButton
              component="a"
              href={documentsSource}
              target="_blank"
              rel="noreferrer"
              color="white"
              variant="outlined"
            >
              Источник: shepherd-pet.ru/documents
            </MKButton> */}
          </Grid2>
        </Container>
      </MKBox>

      <Card
        sx={{
          p: { xs: 2, md: 3 },
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container>
          {renderAccordionList(
            "Декларация о соответствии",
            "Лакомства SHEPHERD для собак всех пород и возрастов.",
            declarationDocuments,
          )}
          <MKBox mt={4}>
            {renderAccordionList(
              "Ветеринарные сопроводительные документы",
              "Подтверждение ветеринарного сопровождения для продукции SHEPHERD.",
              veterinaryDocuments,
            )}
          </MKBox>
        </Container>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default Docs;
