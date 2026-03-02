import { Card, Skeleton } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import MKBox from "components/MKBox";
import borders from "theme/base/borders";
import boxShadows from "theme/base/boxShadows";

const { borderRadius } = borders;
const { colored } = boxShadows;

type Props = { index: number };

export default function ProductItemSkeleton({ index }: Props) {
  return (
    <Grid2
      size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 4 }}
      sx={{ display: "flex" }}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-offset={100}
      data-aos-duration={600}
    >
      <Card
        sx={{
          borderRadius: borderRadius.lg,
          boxShadow: colored.light,
          width: "100%",
          minWidth: { xs: 0, sm: 280, md: 320, lg: 252, xl: 252 },
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Skeleton
          variant="rectangular"
          width="100%"
          sx={{
            height: { xs: 200, sm: 280, md: 240 },
            borderRadius: borderRadius.lg,
          }}
        />

        <MKBox p={2} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Skeleton variant="text" height={28} />
          <Skeleton variant="text" width="70%" height={28} />

          <MKBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={1}
            gap={1}
          >
            <Skeleton variant="text" width={72} height={28} />
            <Skeleton variant="rounded" width={104} height={32} />
          </MKBox>
        </MKBox>
      </Card>
    </Grid2>
  );
}
