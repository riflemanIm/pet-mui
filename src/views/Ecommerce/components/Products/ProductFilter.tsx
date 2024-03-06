import * as React from "react";
import { useSnackbar } from "notistack";

import { useRecoilState } from "recoil";
import { foodDictsState, homePageQueryState } from "atoms";

import { fetchFoodDicts } from "actions/food";
import { SORT_VALUE } from "types";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";

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
        content: { foodTypes, ages, taste },
      } = res;
      if (error) {
        setLoadingFoodType(false);
        enqueueSnackbar(`Error: Fetch Food Dicts`, {
          variant: "error",
        });
        return;
      }
      setFoodDicts({ foodTypes, ages, taste });
      setLoadingFoodType(false);
    };
    func();
  }, []);

  const handleChangeType = (event: SelectChangeEvent) => {
    setHomePageQueryData({
      ...homePageQueryData,
      page: 1,
      type: event.target.value,
    });
  };
  const handleChangeOrder = (event: SelectChangeEvent) => {
    setHomePageQueryData({
      ...homePageQueryData,
      page: 1,
      sort: event.target.value,
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
  console.log("homePageQueryData", homePageQueryData);

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"> Тип</InputLabel>
        <Select
          value={homePageQueryData.type}
          label="Тип"
          onChange={handleChangeType}
        >
          {foodDicts.foodTypes.map((foodType) => (
            <MenuItem key={foodType} value={foodType}>
              {foodType.replaceAll(`_nbsp_`, ` `).replaceAll(`_amp_`, `&`)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"> Сортировать по</InputLabel>
        <Select
          value={homePageQueryData?.sort}
          label="Сортировать по"
          onChange={handleChangeOrder}
        >
          {SORT_VALUE.map((sortType) => (
            <MenuItem key={sortType} value={sortType}>
              {sortType.replaceAll(`_nbsp_`, ` `).replaceAll(`_amp_`, `&`)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

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
                    label={foodDicts.ages.find((item) => item.id == val)?.name}
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

      <FormControl fullWidth>
        <InputLabel id="demo-taste-label">Вкус</InputLabel>
        <Select
          labelId="demo-taste-label"
          id="demo-taste"
          multiple
          value={
            homePageQueryData?.taste ? homePageQueryData?.taste.split(",") : []
          }
          onChange={(e) => handleChangeMulty(e, "taste")}
          input={<OutlinedInput id="select-taste" label="Вкус" />}
          renderValue={(selected) => {
            return (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((val) => (
                  <Chip
                    key={val}
                    label={foodDicts.taste.find((item) => item.id == val)?.name}
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
    </>
  );
}
