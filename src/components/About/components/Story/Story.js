import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Story = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4}>
        {/* <Grid item xs={12} md={6}>
          <Typography fontWeight={700} variant={"h5"}>
            Кто мы
          </Typography>
        </Grid>*/}

        <Grid item xs={12} textAlign="center">
          <Typography fontWeight={700} variant={"h5"}>
            Покупайте наши товары через торговые площадки
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" flexWrap="wrap" justifyContent={"center"}>
            {[
              {
                img: "https://static.tildacdn.com/tild6565-3532-4161-b036-373032626238/6528604949.jpg",
                title: "Интернет-магазин Ozon",
                url: "https://www.ozon.ru/seller/shepherd-1468751/tovary-dlya-zhivotnyh-12300/?miniapp=seller_1468751",
              },
              {
                img: "https://static.tildacdn.com/tild6533-3335-4563-b963-333862656261/p4gscrzouuzghu3pchdj.jpeg",
                title: "Интернет-магазин  Yandex market",
                url: "https://market.yandex.ru/search?suggest_text=SHEPHERD&vendorId=8554219&rs=eJwtUDtIw1AUzaui_SBktC3CcxOX5iVtk7QVQifRpXYXaz-ZOjjo5GBAEUEQBwXBJQ5OKujQxQ9GQTcXi4N1MPjBUQc_uJlzcTkczrn3nPueut5VYldM4vZIgF45H6D1WoDydAJs5wL010j5gOsfQLcWwPkFdGkF6CRPoZRo6w1K5RDcOQb3h8ndIOUO3BkHehPo5YOUvwTXuwa3WoQzZoDuL_EjoPtJN8yfg7_A5YL0SUrYo-RRZFZ-6LYIuLUIdAtwXQYupejOVaRVljHpfdGdbcqhN7rb1Es_4OyTfk8zD9jynmmLkz5whpkizYeoMUbtOzQfp_95RLvv0JZFv_GOFr-Zv2Wx8M1lZ7fT2tr8ZsVcNBkNh5nM-_t4t9yTiNQb9vRcc3ZK5dKQFI2TyfoZZ3Io0ftvwpLZWFivZgxFaNWyKnShq1rWMNKmKVK2mbGNWkOvmaai1LS0ls7aRjbTqAthKllFSYmU-ANiMags&glfilter=7893318%3A8554219",
              },
              {
                img: "https://static.tildacdn.com/tild3030-3765-4835-b238-626465316563/LS01m5BRQC.jpg",
                title: "Интернет-магазин Wildberries",
              },
            ].map((item, i) => (
              <Box maxWidth={220} marginTop={2} mx={4} key={i}>
                <Link
                  component={"a"}
                  color={"primary"}
                  href={item.url}
                  target="_blank"
                >
                  <Box
                    component="img"
                    height={1}
                    width={1}
                    src={item.img}
                    alt={item.title}
                    sx={{
                      transition: "all ease-in-out .25s",
                      borderRadius: 2,
                      filter: "grayscale(0.4)",
                      "&:hover": {
                        transform: "scale(1.2)",
                        cursor: "pointer",
                        filter: "grayscale(0.1)",
                      },
                    }}
                  />
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
