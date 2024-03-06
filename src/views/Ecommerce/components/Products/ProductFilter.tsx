import * as React from "react";
import { useSnackbar } from "notistack";

import { useRecoilState } from "recoil";
import { foodAgeListState, foodTypeListState, homePageQueryState } from "atoms";
import clsx from "clsx";
import { fetchFoodDicts } from "actions/food";
import { Age, SORT_VALUE } from "types";
import { upperCaseEachWord } from "helpers/utils";
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
function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ProductFilter() {
  const theme = useTheme();

  const [loadingFoodType, setLoadingFoodType] = React.useState(false);

  const [foodTypeList, setFoodTypeList] = useRecoilState(foodTypeListState);
  const [ageList, setAgeList] = useRecoilState(foodAgeListState);

  const [homePageQueryData, setHomePageQueryData] =
    useRecoilState(homePageQueryState);
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    const func = async () => {
      setLoadingFoodType(true);
      const res = await fetchFoodDicts();
      const {
        error,
        content: { foodTypes, ages },
      } = res;
      if (error) {
        setLoadingFoodType(false);
        enqueueSnackbar(`Error: Fetch Food Dicts`, {
          variant: "error",
        });
        return;
      }
      setFoodTypeList(foodTypes);
      setAgeList(ages);

      setLoadingFoodType(false);
    };
    func();
  }, [foodTypeList.length, ageList.length, enqueueSnackbar]);

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
  const handleChangeAges = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    const ages = typeof value === "string" ? value.split(",") : value;
    setHomePageQueryData({
      ...homePageQueryData,
      page: 1,
      ages: ages.join(","),
    });
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"> Тип</InputLabel>
        <Select
          value={homePageQueryData.type}
          label="Тип"
          onChange={handleChangeType}
        >
          {foodTypeList.map((foodType) => (
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
        <InputLabel id="demo-multiple-chip-label">Возраст</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={
            homePageQueryData?.ages ? homePageQueryData?.ages.split(",") : []
          }
          onChange={handleChangeAges}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => {
            console.log("selected", selected);
            return (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((val) => (
                  <Chip
                    key={val}
                    label={ageList.find((item) => item.id == val)?.name}
                  />
                ))}
              </Box>
            );
          }}
        >
          {ageList.map((item) => (
            <MenuItem key={item.id} value={item.id.toString()}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
