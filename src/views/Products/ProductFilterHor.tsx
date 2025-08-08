// ProductFilterHor.tsx
import { Box, Chip, CircularProgress, FormControl, FormControlLabel, FormLabel, IconButton, InputAdornment, MenuItem, OutlinedInput, Radio, RadioGroup, Select } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { useSnackbar } from "notistack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { fetchFoodDicts } from "actions/food";
import { foodDictsState, homePageQueryState } from "atoms";
import MKButton from "components/MKButton";
import ClearIcon from "@mui/icons-material/Clear";
import FilterListIcon from "@mui/icons-material/FilterList";
import ProductSort from "./ProductSort";
import type { FoodType } from "types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING = 8;
const menuProps = { PaperProps: { style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING, width: 250 } } } as const;

export default function ProductFilterHor() {
  const [loading, setLoading] = useState(false);
  const [dicts, setDicts] = useRecoilState(foodDictsState);
  const [query, setQuery] = useRecoilState(homePageQueryState);
  const { enqueueSnackbar } = useSnackbar();
  const [ext, setExt] = useState(false);

  useEffect(() => {
    async function loadDicts() {
      setLoading(true);
      const res = await fetchFoodDicts();
      if (res.error) {
        enqueueSnackbar("Не удалось загрузить справочники", { variant: "error" });
      } else {
        setDicts(res.content);
      }
      setLoading(false);
    }
    if (typeof window !== "undefined") loadDicts();
  }, [enqueueSnackbar, setDicts]);

  const handleRadioChange = useCallback((field: string) => (e: any) => {
    setQuery((prev: any) => ({ ...prev, page: 1, [field]: e.target.value }));
  }, [setQuery]);

  const handleMultiChange = useCallback((field: string) => (e: any) => {
    const value = e.target.value;
    const items = Array.isArray(value) ? value : String(value).split(",");
    setQuery((prev: any) => ({ ...prev, page: 1, [field]: items.join(",") }));
  }, [setQuery]);

  const handleClear = useCallback((field: string) => () => {
    setQuery((prev: any) => ({ ...prev, page: 1, [field]: "" }));
  }, [setQuery]);

  const filters = useMemo(() => ([
    { name: "designedFor", label: "Разработано для", type: "radio", dynamic: true },
    {
      name: "type",
      label: "Категория товара",
      type: "radio",
      options: [
        { id: "Treat", label: "Лакомства" },
        { id: "Souvenirs", label: "Аксессуары" },
        { id: "DryFood", label: "Сухой корм" },
      ] as { id: FoodType; label: string }[],
    },
  ]), []);

  const filtersExt = useMemo(() => ([
    { name: "ingredient", label: "Ингредиенты", type: "multi", chipColor: "info" },
    { name: "specialNeeds", label: "Особые потребности", type: "multi", chipColor: "info" },
    { name: "petSizes", label: "Размер питомца", type: "multi", chipColor: "info" },
    { name: "taste", label: "Вкус", type: "multi", chipColor: "warning" },
    { name: "hardness", label: "Консистенция корма", type: "multi", chipColor: "info" },
    { name: "ages", label: "Возраст", type: "multi", chipColor: "primary" },
    { name: "packages", label: "Упаковка", type: "multi", chipColor: "default" },
  ]), []);

  if (loading) {
    return (<Box display="flex" justifyContent="center" alignItems="center" p={4}><CircularProgress /></Box>);
  }

  return (
    <>
      <Grid2 container spacing={3}>
        {filters.map(({ name, label, type, options, dynamic, chipColor }) => (
          <Grid2 key={name} size={"auto"}>
            {type === "radio" ? (
              <FormControl fullWidth>
                <FormLabel sx={{ fontSize: 13, color: "secondary" }}>{label}</FormLabel>
                <RadioGroup row value={(query as any)[name] || ""} onChange={handleRadioChange(name)}>
                  {(dynamic ? (dicts as any)[name] : options).map((opt: any) => (
                    <FormControlLabel key={opt.id} value={opt.id} control={<Radio />} label={opt.label || opt.name} />
                  ))}
                </RadioGroup>
              </FormControl>
            ) : (
              <FormControl fullWidth variant="outlined">
                <FormLabel sx={{ fontSize: 13, color: "secondary", mb: 1 }}>{label}</FormLabel>
                <Select
                  multiple
                  value={(query as any)[name] ? String((query as any)[name]).split(",") : []}
                  onChange={handleMultiChange(name)}
                  input={<OutlinedInput endAdornment={(query as any)[name]?.length > 0 && (
                    <InputAdornment position="end" sx={{ mr: 1 }}>
                      <IconButton size="small" onClick={handleClear(name)} aria-label="Очистить">
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  )} />}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {(selected as string[]).map((val) => {
                        const item = (dicts as any)[name].find((i: any) => String(i.id) === val);
                        return <Chip key={val} label={item?.name} color={chipColor as any} size="small" />;
                      })}
                    </Box>
                  )}
                  MenuProps={menuProps}
                >
                  {(dicts as any)[name].map((item: any) => (
                    <MenuItem key={item.id} value={String(item.id)} sx={{ fontWeight: (query as any)[name]?.split(",").includes(String(item.id)) ? 600 : 400 }}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </Grid2>
        ))}

        <Grid2 size="grow" textAlign="right" justifySelf="right" alignSelf="end">
          <MKButton variant="contained" color="primary" size="small" onClick={() => setExt((prev) => !prev)} startIcon={<FilterListIcon />}>
            фильтры
          </MKButton>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={3} mt={3}>
        {ext && filtersExt.map(({ name, label, type, options, dynamic, chipColor }) => (
          <Grid2 key={name} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            {type === "radio" ? (
              <FormControl fullWidth>
                <FormLabel sx={{ fontSize: 13, color: "secondary" }}>{label}</FormLabel>
                <RadioGroup row value={(query as any)[name] || ""} onChange={handleRadioChange(name)}>
                  {(dynamic ? (dicts as any)[name] : options).map((opt: any) => (
                    <FormControlLabel key={opt.id} value={opt.id} control={<Radio />} label={opt.label || opt.name} />
                  ))}
                </RadioGroup>
              </FormControl>
            ) : (
              <FormControl fullWidth>
                <FormLabel sx={{ fontSize: 13, color: "secondary", mb: 1 }}>{label}</FormLabel>
                <Select
                  variant="filled"
                  multiple
                  value={(query as any)[name] ? String((query as any)[name]).split(",") : []}
                  onChange={handleMultiChange(name)}
                  input={<OutlinedInput endAdornment={(query as any)[name]?.length > 0 && (
                    <InputAdornment position="end" sx={{ mr: 1 }}>
                      <IconButton size="small" onClick={handleClear(name)} aria-label="Очистить">
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  )} />}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {(selected as string[]).map((val) => {
                        const item = (dicts as any)[name].find((i: any) => String(i.id) === val);
                        return <Chip key={val} label={item?.name} color={chipColor as any} size="small" />;
                      })}
                    </Box>
                  )}
                  MenuProps={menuProps}
                >
                  {(dicts as any)[name].map((item: any) => (
                    <MenuItem key={item.id} value={String(item.id)} sx={{ fontWeight: (query as any)[name]?.split(",").includes(String(item.id)) ? 600 : 400 }}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </Grid2>
        ))}
        <Grid2 alignSelf="end" textAlign="right" justifySelf="right" size="grow">
          <ProductSort />
        </Grid2>
      </Grid2>
    </>
  );
}
