// ProductFilter.tsx
import ClearIcon from "@mui/icons-material/Clear";
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
import { fetchFoodDicts } from "actions/food";
import type { FoodType } from "types";
import { useAppState } from "context/AppStateContext";

type DictKey = keyof ReturnType<typeof defaultDicts>;
const ITEM_HEIGHT = 48;
const ITEM_PADDING = 8;
const menuProps = {
  PaperProps: {
    style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING, width: 250 },
  },
} as const;

const defaultDicts = () => ({
  foodTypes: [] as { id: number; name: string }[],
  ages: [] as { id: number; name: string }[],
  taste: [] as { id: number; name: string }[],
  designedFor: [] as { id: number; name: string }[],
  ingredient: [] as { id: number; name: string }[],
  hardness: [] as { id: number; name: string }[],
  packages: [] as { id: number; name: string }[],
  petSizes: [] as { id: number; name: string }[],
  specialNeeds: [] as { id: number; name: string }[],
});

export default function ProductFilter() {
  const [loading, setLoading] = useState(false);
  const {
    foodDicts,
    setFoodDicts,
    homePageQuery,
    setHomePageQuery,
  } = useAppState();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    async function loadDicts() {
      setLoading(true);
      const res = await fetchFoodDicts();
      if (res.error) {
        enqueueSnackbar("Не удалось загрузить справочники", {
          variant: "error",
        });
      } else {
        setFoodDicts(res.content);
      }
      setLoading(false);
    }
    if (typeof window !== "undefined") loadDicts();
  }, [enqueueSnackbar, setFoodDicts]);

  const handleRadioChange = useCallback(
    (field: string) => (e: any) => {
      setHomePageQuery((prev) => ({
        ...prev,
        page: 1,
        [field]: e.target.value,
      }));
    },
    [setHomePageQuery]
  );

  const handleMultiChange = useCallback(
    (field: string) => (e: any) => {
      const value = e.target.value;
      const items = Array.isArray(value) ? value : String(value).split(",");
      setHomePageQuery((prev) => ({
        ...prev,
        page: 1,
        [field]: items.join(","),
      }));
    },
    [setHomePageQuery]
  );

  const handleClear = useCallback(
    (field: string) => () => {
      setHomePageQuery((prev) => ({ ...prev, page: 1, [field]: "" }));
    },
    [setHomePageQuery]
  );

  const filters = useMemo(
    () => [
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
      {
        name: "ingredient",
        label: "Ингредиенты",
        type: "multi",
        chipColor: "info",
      },
      {
        name: "designedFor",
        label: "Разработано для",
        type: "radio",
        dynamic: true,
      },
      {
        name: "specialNeeds",
        label: "Особые потребности",
        type: "multi",
        chipColor: "info",
      },
      {
        name: "petSizes",
        label: "Размер питомца",
        type: "multi",
        chipColor: "info",
      },
      { name: "taste", label: "Вкус", type: "multi", chipColor: "warning" },
      {
        name: "hardness",
        label: "Консистенция корма",
        type: "multi",
        chipColor: "info",
      },
      { name: "ages", label: "Возраст", type: "multi", chipColor: "primary" },
      {
        name: "packages",
        label: "Упаковка",
        type: "multi",
        chipColor: "default",
      },
    ],
    []
  );

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid2
      container
      spacing={3}
      data-aos="fade-up"
      data-aos-delay={100}
      data-aos-offset={100}
      data-aos-duration={600}
    >
      {filters.map(({ name, label, type, options, dynamic, chipColor }) => (
        <Grid2 key={name} size={12}>
          {type === "radio" ? (
            <FormControl fullWidth>
              <FormLabel sx={{ fontSize: 13, color: "secondary" }}>
                {label}
              </FormLabel>
              <RadioGroup
                row
                value={(homePageQuery as any)[name] || ""}
                onChange={handleRadioChange(name)}
              >
                {(dynamic ? (foodDicts as any)[name] : options).map((opt: any) => (
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
              <FormLabel sx={{ fontSize: 13, color: "secondary", mb: 1 }}>
                {label}
              </FormLabel>
              <Select
                multiple
                value={(homePageQuery as any)[name]
                  ? String((homePageQuery as any)[name]).split(",")
                  : []}
                onChange={handleMultiChange(name)}
                input={
                  <OutlinedInput
                    endAdornment={
                      (homePageQuery as any)[name]?.length > 0 && (
                        <InputAdornment position="end" sx={{ mr: 1 }}>
                          <IconButton
                            size="small"
                            onClick={handleClear(name)}
                            aria-label="Очистить"
                          >
                            <ClearIcon fontSize="small" />
                          </IconButton>
                        </InputAdornment>
                      )
                    }
                  />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {(selected as string[]).map((val) => {
                      const item = (foodDicts as any)[name].find(
                        (i: any) => String(i.id) === val
                      );
                      return (
                        <Chip
                          key={val}
                          label={item?.name}
                          color={chipColor as any}
                          size="small"
                        />
                      );
                    })}
                  </Box>
                )}
                MenuProps={menuProps}
              >
                {(foodDicts as any)[name].map((item: any) => (
                  <MenuItem
                    key={item.id}
                    value={String(item.id)}
                    sx={{
                      fontWeight: (homePageQuery as any)[name]
                        ?.split(",")
                        .includes(String(item.id))
                        ? 600
                        : 400,
                    }}
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
