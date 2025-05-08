import ClearAllIcon from "@mui/icons-material/ClearAll";
import {
  Box,
  Chip,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { useSnackbar } from "notistack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";

import { fetchFoodDicts } from "actions/food";
import { foodDictsState, homePageQueryState } from "atoms";

const ITEM_HEIGHT = 48;
const ITEM_PADDING = 8;
const menuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING,
      width: 250,
    },
  },
};

export default function ProductFilter() {
  const [loading, setLoading] = useState(false);
  const [dicts, setDicts] = useRecoilState(foodDictsState);
  const [query, setQuery] = useRecoilState(homePageQueryState);
  const { enqueueSnackbar } = useSnackbar();

  // Load dictionaries
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

  // Handler for radio fields
  const handleRadioChange = useCallback((field) => (e) => {
    setQuery(prev => ({ ...prev, page: 1, [field]: e.target.value }));
  }, [setQuery]);

  // Handler for multi-select
  const handleMultiChange = useCallback((field) => (e) => {
    const value = e.target.value;
    const items = Array.isArray(value) ? value : String(value).split(',');
    setQuery(prev => ({ ...prev, page: 1, [field]: items.join(',') }));
  }, [setQuery]);

  // Clear field
  const handleClear = useCallback((field) => () => {
    setQuery(prev => ({ ...prev, page: 1, [field]: '' }));
  }, [setQuery]);

  // Define filters
  const filters = useMemo(() => [
    {
      name: "type",
      label: "Категория товара",
      type: "radio",
      options: [
        { id: "Treat", label: "Лакомства" },
        { id: "Souvenirs", label: "Аксессуары" },
      ],
    },
    { name: "ingridient", label: "Ингредиенты", type: "multi", chipColor: "info" },
    { name: "designedFor", label: "Разработано для", type: "radio", dynamic: true },
    { name: "specialNeeds", label: "Особые потребности", type: "multi", chipColor: "info" },
    { name: "petSizes", label: "Размер питомца", type: "multi", chipColor: "info" },
    { name: "taste", label: "Вкус", type: "multi", chipColor: "warning" },
    { name: "hardness", label: "Консистенция корма", type: "multi", chipColor: "info" },
    { name: "ages", label: "Возраст", type: "multi", chipColor: "primary" },
    { name: "packages", label: "Упаковка", type: "multi", chipColor: "default" },
  ], []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid2 container spacing={3} data-aos="fade-up" data-aos-delay={100} data-aos-offset={100} data-aos-duration={600}>
      {filters.map(({ name, label, type, options, dynamic, chipColor }) => (
        <Grid2 size={12} key={name}>
          {type === "radio" ? (
            <FormControl fullWidth>
              <FormLabel sx={{ fontSize: 13, color: 'secondary' }}>{label}</FormLabel>
              <RadioGroup
                row
                value={query[name] || ''}
                onChange={handleRadioChange(name)}
              >
                {(dynamic ? dicts[name] : options).map(opt => (
                  <FormControlLabel
                    key={opt.id}
                    value={opt.id}
                    control={<Radio />}
                    label={opt.label || opt.name}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          ) : (
            <FormControl fullWidth>
              <FormLabel sx={{ fontSize: 13, color: 'secondary', mb: 1 }}>{label}</FormLabel>
              <Select
                multiple
                value={query[name] ? query[name].split(',') : []}
                onChange={handleMultiChange(name)}
                input={
                  <OutlinedInput
                    endAdornment={
                      query[name]?.length > 0 && (
                        <InputAdornment position="end" sx={{ mr: 1 }}>
                          <IconButton
                            size="small"
                            onClick={handleClear(name)}
                            aria-label="Очистить"
                          >
                            <ClearAllIcon fontSize="small" />
                          </IconButton>
                        </InputAdornment>
                      )
                    }
                  />
                }
                renderValue={selected => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map(val => {
                      const item = dicts[name].find(i => String(i.id) === val);
                      return <Chip key={val} label={item?.name} color={chipColor} size="small" />;
                    })}
                  </Box>
                )}
                MenuProps={menuProps}
              >
                {dicts[name].map(item => (
                  <MenuItem
                    key={item.id}
                    value={String(item.id)}
                    sx={{ fontWeight: query[name]?.split(',').includes(String(item.id)) ? 600 : 400 }}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Grid2>
      ))}
    </Grid2>
  );
}
