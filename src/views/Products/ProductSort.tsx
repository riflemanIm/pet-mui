// ProductSort.tsx
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { homePageQueryState } from "atoms";
import { useRecoilState } from "recoil";
import { SORT_VALUE } from "types";

const useStyles = makeStyles((theme: any) => ({
  select: {
    color: theme.palette.text.main,
    [theme.breakpoints.down("md")]: { color: theme.palette.white.main },
  },
  icon: {
    color: theme.palette.text.main,
    [theme.breakpoints.down("md")]: { color: theme.palette.white.main },
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

  const handleChangeOrder = (event: any) => {
    setHomePageQueryData({
      ...(homePageQueryData as any),
      page: 1,
      sort: event.target.value,
    });
  };

  // Поддерживаем текущие значения + мапим на новое имя поля publishedAt
  return (
    <FormControl size="medium" variant="outlined">
      <InputLabel id="product-sort" className={classes.label}>
        Сортировать по
      </InputLabel>
      <Select
        labelId="product-sort"
        value={(homePageQueryData as any)?.sort || "publishedAt"}
        label="Сортировать по"
        onChange={handleChangeOrder}
        variant="outlined"
        sx={{ borderRadius: 2, width: 200 }}
        classes={{ select: classes.select, icon: classes.icon }}
      >
        {SORT_VALUE.map((sortType) => (
          <MenuItem key={sortType} value={sortType as any}>
            {String(sortType)
              .replaceAll(`_nbsp_`, ` `)
              .replaceAll(`_amp_`, `&`)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
