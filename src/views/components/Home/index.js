import Box from "@mui/material/Box";
import { alpha, useTheme } from "@mui/material/styles";
import Container from "components/Container";
import {
  Events,
  Features,
  GetStarted,
  IndexViewCategories,
} from "./components";

const IndexView = () => {
  const theme = useTheme();
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${alpha(
            theme.palette.background.paper,
            0
          )}, ${alpha(theme.palette.background.paper, 1)} 100%)`,
          backgroundRepeat: "repeat-x",
          position: "relative",
        }}
      >
        <Container>
          <IndexViewCategories />
        </Container>
        <Container>
          <Events />
        </Container>
        <Container>
          <Features />
        </Container>
        <Box
          component={"svg"}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: "100%",
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Container>
        <GetStarted />
      </Container>
    </Box>
  );
};

export default IndexView;
