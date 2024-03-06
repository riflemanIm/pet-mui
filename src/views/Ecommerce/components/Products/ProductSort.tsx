import * as React from "react";
import { useRecoilState } from "recoil";
import { homePageQueryState } from "atoms";

import { SORT_VALUE } from "types";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

function getStyles(name: string, vals: readonly string[]) {
  return {
    fontWeight: !vals.includes(name) ? 400 : 550,
  };
}

export default function ProductSort() {
  const [homePageQueryData, setHomePageQueryData] =
    useRecoilState(homePageQueryState);

  const handleChangeOrder = (event: SelectChangeEvent) => {
    setHomePageQueryData({
      ...homePageQueryData,
      page: 1,
      sort: event.target.value,
    });
  };

  //console.log("homePageQueryData", homePageQueryData);

  return (
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
  );
}
