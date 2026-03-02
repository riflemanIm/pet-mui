import { Box, Grid, Skeleton, Stack } from "@mui/material";

export default function CardDetailsSkeleton() {
  return (
    <Grid container spacing={{ xs: 2, md: 4 }}>
      <Grid item xs={12} md={6}>
        <Skeleton
          variant="rounded"
          width="100%"
          sx={{ height: { xs: 320, md: 560 }, borderRadius: 2 }}
        />
        <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Skeleton
              key={`thumb-skeleton-${idx}`}
              variant="rounded"
              width={70}
              height={70}
              sx={{ borderRadius: 1.5 }}
            />
          ))}
        </Stack>
      </Grid>

      <Grid item xs={12} md={6}>
        <Skeleton variant="rounded" width={110} height={32} />

        <Box mt={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Skeleton variant="text" width={96} height={44} />
            <Skeleton variant="text" width={120} height={44} />
          </Stack>
          <Skeleton variant="text" width={140} height={28} />
        </Box>

        <Box mt={3}>
          <Skeleton variant="text" width="90%" height={28} />
          <Skeleton variant="text" width="84%" height={28} />
          <Skeleton variant="text" width="70%" height={28} />
        </Box>

        <Box mt={3}>
          <Skeleton variant="rounded" width="100%" height={52} />
        </Box>
      </Grid>
    </Grid>
  );
}
