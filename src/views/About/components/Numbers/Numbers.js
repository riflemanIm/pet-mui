import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Numbers = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {[
          {
            title: "300+",
            subtitle: "300+ довольных клиентов кадый день",
          },
          {
            title: 45,
            subtitle: "45 филиалов по всей России",
          },
          {
            title: "100%",
            subtitle: "100% качество нашей продукции говорит само за себя",
          },
        ].map((item, i) => (
          <Grid key={i} item xs={12} sm={4}>
            <Typography
              variant="h3"
              align={"center"}
              gutterBottom
              sx={{
                fontWeight: 900,
              }}
            >
              {item.title}
            </Typography>
            <Typography color="text.secondary" align={"center"} component="p">
              {item.subtitle}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Numbers;
