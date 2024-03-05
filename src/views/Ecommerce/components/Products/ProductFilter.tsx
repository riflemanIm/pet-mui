import * as React from "react";
import { useSnackbar } from "notistack";

import { useRecoilState } from "recoil";
import { foodTypeListState, homePageQueryState } from "atoms";
import clsx from "clsx";
import { fetchFoodTypes } from "actions/food";
import { SORT_VALUE } from "types";
import { upperCaseEachWord } from "helpers/utils";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export default function ProductFilter() {
  const [loadingFoodType, setLoadingFoodType] = React.useState(false);
  const [foodType, setFoodType] = React.useState(null);

  const [foodTypeList, setFoodTypeList] = useRecoilState(foodTypeListState);
  const [homePageQueryData, setHomePageQueryData] =
    useRecoilState(homePageQueryState);
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    const func = async () => {
      setLoadingFoodType(true);
      const res = await fetchFoodTypes();
      const { error, content } = res;
      if (error) {
        setLoadingFoodType(false);
        enqueueSnackbar(`Error: Fetch Food Types`, {
          variant: "error",
        });
        return;
      }
      setFoodTypeList(content);
      setLoadingFoodType(false);
    };
    !foodTypeList.length && func();
  }, [foodTypeList.length, enqueueSnackbar, setFoodTypeList]);

  const handleChange = (event: SelectChangeEvent) => {
    setHomePageQueryData({
      ...homePageQueryData,
      page: 1,
      type: event.target.value,
    });
  };
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"> Тип</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={homePageQueryData.type}
          label="Age"
          onChange={handleChange}
        >
          {foodTypeList.map((foodType) => (
            <MenuItem key={foodType} value={foodType}>
              {foodType.replaceAll(`_nbsp_`, ` `).replaceAll(`_amp_`, `&`)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <div className="menu-title">Order by</div>
          <ul>
            {SORT_VALUE.map((sortType) => (
              <li
                key={sortType}
                onClick={() => {
                  setHomePageQueryData({
                    ...homePageQueryData,
                    page: 1,
                    sort: sortType,
                  });
                }}
              >
                <span
                  className={clsx({
                    active: homePageQueryData?.sort === sortType,
                  })}
                >
                  {upperCaseEachWord(sortType.replaceAll(`_`, ` `))}
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
