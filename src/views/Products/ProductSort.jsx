import { homePageQueryState } from "atoms";
import { useRecoilState } from "recoil";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SORT_VALUE } from "types";
const useStyles = makeStyles((theme) => ({
  select: {
    color: theme.palette.text.main,
    [theme.breakpoints.down("md")]: {
      color: theme.palette.white.main,
    },
  },
  icon: {
    color: theme.palette.text.main,
    [theme.breakpoints.down("md")]: {
      color: theme.palette.white.main,
    },
  },
  label: {
    [theme.breakpoints.down("md")]: {
      color: `${theme.palette.white.main} !important`,
    },
  },
}));
export default function ProductSort() {
  const classes = useStyles();
  const [homePageQueryData, setHomePageQueryData] =
    useRecoilState(homePageQueryState);

  const handleChangeOrder = (event) => {
    setHomePageQueryData({
      ...homePageQueryData,
      page: 1,
      sort: event.target.value,
    });
  };

  //console.log("homePageQueryData", homePageQueryData);

  return (
    <FormControl size="medium" variant="outlined">
      <InputLabel id="demo-simple-select-label" className={classes.label}>
        Сортировать по
      </InputLabel>
      <Select
        value={homePageQueryData?.sort || "published_at"}
        label="Сортировать по"
        onChange={handleChangeOrder}
        variant="outlined"
        sx={{
          borderRadius: 2,
          width: 200,
        }}
        classes={{
          select: classes.select,
          icon: classes.icon,
        }}
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
