// ProductSort.tsx
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SORT_VALUE } from "types";
import { useAppState } from "context/AppStateContext";
import type { SxProps, Theme } from "@mui/material/styles";

type Props = {
  size?: "small" | "medium";
  sx?: SxProps<Theme>;
};

export default function ProductSort({ size = "small", sx }: Props) {
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
    <FormControl size={size} variant="outlined" sx={sx}>
      <InputLabel id="product-sort">Сортировка</InputLabel>
      <Select
        labelId="product-sort"
        value={(homePageQuery as any)?.sort || "publishedAt"}
        label="Сортировка"
        onChange={handleChangeOrder}
        variant="outlined"
        sx={{ borderRadius: 2, minWidth: 220 }}
      >
        {SORT_VALUE.map((sortType) => (
          <MenuItem key={sortType} value={sortType as any}>
            {String(sortType)
              .replace("publishedAt", "По новизне")
              .replace("price", "По цене")}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
