import * as React from "react";
import { useSnackbar } from "notistack";

import { useRecoilState } from "recoil";
import { foodDictsState, homePageQueryState } from "atoms";

import { fetchFoodDicts } from "actions/food";

import {
  Box,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name: string, vals: readonly string[]) {
  return {
    fontWeight: !vals.includes(name) ? 400 : 550,
  };
}

export default function ProductFilter() {
  const [loadingFoodType, setLoadingFoodType] = React.useState(false);

  const [foodDicts, setFoodDicts] = useRecoilState(foodDictsState);

  const [homePageQueryData, setHomePageQueryData] =
    useRecoilState(homePageQueryState);
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    const func = async () => {
      setLoadingFoodType(true);
      const res = await fetchFoodDicts();
      const {
        error,
        content: {
          foodTypes,
          ages,
          taste,
          designedFor,
          ingridient,
          hardness,
          packages,
          petSizes,
        },
      } = res;
      if (error) {
        setLoadingFoodType(false);
        enqueueSnackbar(`Error: Fetch Food Dicts`, {
          variant: "error",
        });
        return;
      }
      setFoodDicts({
        foodTypes,
        ages,
        taste,
        designedFor,
        ingridient,
        hardness,
        packages,
        petSizes,
      });
      setLoadingFoodType(false);
    };
    func();
  }, []);

  const handleChangeRadio = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setHomePageQueryData({
      ...homePageQueryData,
      page: 1,
      [name]: (event.target as HTMLInputElement).value,
    });
  };

  const handleChangeMulty = (
    event: SelectChangeEvent<string[]>,
    name: string
  ) => {
    const {
      target: { value },
    } = event;
    const vals = typeof value === "string" ? value.split(",") : value;
    setHomePageQueryData({
      ...homePageQueryData,
      page: 1,
      [name]: vals.join(","),
    });
  };
  //console.log("homePageQueryData", homePageQueryData);

  return (
    <Grid
      container
      spacing={3}
      data-aos={"fade-up"}
      data-aos-delay={100}
      data-aos-offset={100}
      data-aos-duration={600}
    >
      <Grid item xs={12} sm={12}>
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontSize: 13, color: "secondary" }}
          >
            Категория товара
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            onChange={(e) => handleChangeRadio(e, "type")}
          >
            <FormControlLabel
              value="Treat"
              control={<Radio />}
              label="Лакомства"
            />
            <FormControlLabel
              value="Souvenirs"
              control={<Radio />}
              label="Аксессуары"
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      {/* <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"> Сортировать по</InputLabel>
          <Select
            value={homePageQueryData?.sort}
            label="Сортировать по"
            onChange={handleChangeOrder}
            variant="standard"
          >
            {SORT_VALUE.map((sortType) => (
              <MenuItem key={sortType} value={sortType}>
                {sortType.replaceAll(`_nbsp_`, ` `).replaceAll(`_amp_`, `&`)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid> */}

      <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-ages-label">Возраст</InputLabel>
          <Select
            labelId="demo-ages-label"
            id="demo-ages"
            multiple
            value={
              homePageQueryData?.ages ? homePageQueryData?.ages.split(",") : []
            }
            onChange={(e) => handleChangeMulty(e, "ages")}
            input={<OutlinedInput id="select-ages" label="Возраст" />}
            renderValue={(selected) => {
              return (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((val) => (
                    <Chip
                      key={val}
                      color="primary"
                      label={
                        foodDicts.ages.find((item) => item.id == val)?.name
                      }
                    />
                  ))}
                </Box>
              );
            }}
            MenuProps={MenuProps}
          >
            {foodDicts.ages.map((item) => (
              <MenuItem
                key={item.id}
                value={item.id.toString()}
                style={getStyles(
                  item.id.toString(),
                  homePageQueryData?.ages
                    ? homePageQueryData?.ages.split(",")
                    : []
                )}
              >
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      {/* <Grid item xs={12} sm={12}>
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontSize: 13, color: "secondary" }}
          >
            Консистенция корма
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            onChange={(e) => handleChangeRadio(e, "hardness")}
          >
            {foodDicts.hardness.map((item) => (
              <FormControlLabel
                value={item.id}
                control={<Radio />}
                label={item.name}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid> */}

      <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-hardness-label">Консистенция корма</InputLabel>
          <Select
            labelId="demo-hardness-label"
            id="demo-hardness"
            multiple
            value={
              homePageQueryData?.hardness
                ? homePageQueryData?.hardness.split(",")
                : []
            }
            onChange={(e) => handleChangeMulty(e, "hardness")}
            input={
              <OutlinedInput id="select-hardness" label="Консистенция корма" />
            }
            renderValue={(selected) => {
              return (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((val) => (
                    <Chip
                      key={val}
                      color="info"
                      label={
                        foodDicts.hardness.find((item) => item.id == val)?.name
                      }
                    />
                  ))}
                </Box>
              );
            }}
            MenuProps={MenuProps}
          >
            {foodDicts.hardness.map((item) => (
              <MenuItem
                key={item.id}
                value={item.id.toString()}
                style={getStyles(
                  item.id.toString(),
                  homePageQueryData?.hardness
                    ? homePageQueryData?.hardness.split(",")
                    : []
                )}
              >
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-designedFor-label">Разработано для</InputLabel>
          <Select
            labelId="demo-designedFor-label"
            id="demo-designedFor"
            multiple
            value={
              homePageQueryData?.designedFor
                ? homePageQueryData?.designedFor.split(",")
                : []
            }
            onChange={(e) => handleChangeMulty(e, "designedFor")}
            input={
              <OutlinedInput id="select-designedFor" label="Разработано для" />
            }
            renderValue={(selected) => {
              return (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((val) => (
                    <Chip
                      key={val}
                      color="info"
                      label={
                        foodDicts.designedFor.find((item) => item.id == val)
                          ?.name
                      }
                    />
                  ))}
                </Box>
              );
            }}
            MenuProps={MenuProps}
          >
            {foodDicts.designedFor.map((item) => (
              <MenuItem
                key={item.id}
                value={item.id.toString()}
                style={getStyles(
                  item.id.toString(),
                  homePageQueryData?.designedFor
                    ? homePageQueryData?.designedFor.split(",")
                    : []
                )}
              >
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-ingridient-label">Ингридиенты</InputLabel>
          <Select
            labelId="demo-ingridient-label"
            id="demo-ingridient"
            multiple
            value={
              homePageQueryData?.ingridient
                ? homePageQueryData?.ingridient.split(",")
                : []
            }
            onChange={(e) => handleChangeMulty(e, "ingridient")}
            input={<OutlinedInput id="select-ingridient" label="Ингридиенты" />}
            renderValue={(selected) => {
              return (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((val) => (
                    <Chip
                      key={val}
                      color="info"
                      label={
                        foodDicts.ingridient.find((item) => item.id == val)
                          ?.name
                      }
                    />
                  ))}
                </Box>
              );
            }}
            MenuProps={MenuProps}
          >
            {foodDicts.ingridient.map((item) => (
              <MenuItem
                key={item.id}
                value={item.id.toString()}
                style={getStyles(
                  item.id.toString(),
                  homePageQueryData?.ingridient
                    ? homePageQueryData?.ingridient.split(",")
                    : []
                )}
              >
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-petSizes-label">Размер питомца</InputLabel>
          <Select
            labelId="demo-petSizes-label"
            id="demo-petSizes"
            multiple
            value={
              homePageQueryData?.petSizes
                ? homePageQueryData?.petSizes.split(",")
                : []
            }
            onChange={(e) => handleChangeMulty(e, "petSizes")}
            input={
              <OutlinedInput id="select-petSizes" label="Размер питомца" />
            }
            renderValue={(selected) => {
              return (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((val) => (
                    <Chip
                      key={val}
                      color="info"
                      label={
                        foodDicts.petSizes.find((item) => item.id == val)?.name
                      }
                    />
                  ))}
                </Box>
              );
            }}
            MenuProps={MenuProps}
          >
            {foodDicts.petSizes.map((item) => (
              <MenuItem
                key={item.id}
                value={item.id.toString()}
                style={getStyles(
                  item.id.toString(),
                  homePageQueryData?.petSizes
                    ? homePageQueryData?.petSizes.split(",")
                    : []
                )}
              >
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-taste-label">Вкус</InputLabel>
          <Select
            labelId="demo-taste-label"
            id="demo-taste"
            multiple
            value={
              homePageQueryData?.taste
                ? homePageQueryData?.taste.split(",")
                : []
            }
            onChange={(e) => handleChangeMulty(e, "taste")}
            input={<OutlinedInput id="select-taste" label="Вкус" />}
            renderValue={(selected) => {
              return (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((val) => (
                    <Chip
                      key={val}
                      color="warning"
                      label={
                        foodDicts.taste.find((item) => item.id == val)?.name
                      }
                    />
                  ))}
                </Box>
              );
            }}
            MenuProps={MenuProps}
          >
            {foodDicts.taste.map((item) => (
              <MenuItem
                key={item.id}
                value={item.id.toString()}
                style={getStyles(
                  item.id.toString(),
                  homePageQueryData?.taste
                    ? homePageQueryData?.taste.split(",")
                    : []
                )}
              >
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-packages-label">Упаковка</InputLabel>
          <Select
            labelId="demo-packages-label"
            id="demo-packages"
            multiple
            value={
              homePageQueryData?.packages
                ? homePageQueryData?.packages.split(",")
                : []
            }
            onChange={(e) => handleChangeMulty(e, "packages")}
            input={<OutlinedInput id="select-packages" label="Упаковка" />}
            renderValue={(selected) => {
              return (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((val) => (
                    <Chip
                      key={val}
                      label={
                        foodDicts.packages.find((item) => item.id == val)?.name
                      }
                    />
                  ))}
                </Box>
              );
            }}
            MenuProps={MenuProps}
          >
            {foodDicts.packages.map((item) => (
              <MenuItem
                key={item.id}
                value={item.id.toString()}
                style={getStyles(
                  item.id.toString(),
                  homePageQueryData?.packages
                    ? homePageQueryData?.packages.split(",")
                    : []
                )}
              >
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
