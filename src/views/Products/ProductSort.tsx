// ProductSort.tsx
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SORT_VALUE } from "types";
import { useAppState } from "context/AppStateContext";

const useStyles = makeStyles((theme: any) => ({
  select: {
    color: theme.palette.white.main,
  },
  icon: {
    color: theme.palette.white.main,
  },
  label: {
    color: `${theme.palette.white.main} !important`,
  },
}));

export default function ProductSort() {
  const classes = useStyles();
  const { homePageQuery, setHomePageQuery } = useAppState();

  const handleChangeOrder = (event: any) => {
    setHomePageQuery((prev) => ({
      ...prev,
      page: 1,
      sort: event.target.value,
    }));
  };

  // Поддерживаем текущие значения + мапим на новое имя поля publishedAt
  return (
    <FormControl size="medium" variant="outlined">
      <InputLabel id="product-sort" className={classes.label}>
        Сортировать по
      </InputLabel>
      <Select
        labelId="product-sort"
        value={(homePageQuery as any)?.sort || "publishedAt"}
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
