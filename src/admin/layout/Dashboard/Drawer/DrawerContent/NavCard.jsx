// material-ui
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// project import
import MainCard from "@admin/components/MainCard";

// assets
import avatar from "../../../../../assets/logo-omly.min.svg";
import AnimateButton from "@admin/components/@extended/AnimateButton";

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

export default function NavCard() {
  return (
    <MainCard sx={{ bgcolor: "grey.50", m: 3 }}>
      <Stack alignItems="center" spacing={2.5}>
        <CardMedia component="img" image={avatar.src} sx={{ width: 112 }} />

        <AnimateButton>
          <Button
            component={Link}
            target="_blank"
            href="/catalog"
            variant="contained"
            color="success"
            size="small"
          >
            Site catalog
          </Button>
        </AnimateButton>
      </Stack>
    </MainCard>
  );
}
