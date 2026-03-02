// ProductFilter.tsx
import ClearIcon from "@mui/icons-material/Clear";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Chip,
  CircularProgress,
  Divider,
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
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { useSnackbar } from "notistack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchFoodDicts } from "actions/food";
import type { FoodType } from "types";
import { useAppState } from "context/AppStateContext";

const ITEM_HEIGHT = 48;
const ITEM_PADDING = 8;
const menuProps = {
  PaperProps: {
    style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING, width: 250 },
  },
} as const;

export default function ProductFilter() {
  const [loading, setLoading] = useState(false);
  const { foodDicts, setFoodDicts, homePageQuery, setHomePageQuery } =
    useAppState();
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
    [setHomePageQuery],
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
    [setHomePageQuery],
  );

  const handleClear = useCallback(
    (field: string) => () => {
      setHomePageQuery((prev) => ({ ...prev, page: 1, [field]: "" }));
    },
    [setHomePageQuery],
  );

  const handleResetAll = useCallback(() => {
    setHomePageQuery((prev) => ({
      ...prev,
      page: 1,
      type: "",
      ages: "",
      taste: "",
      designedFor: "",
      ingredient: "",
      hardness: "",
      packages: "",
      petSizes: "",
      specialNeeds: "",
    }));
  }, [setHomePageQuery]);

  const filters = useMemo(
    () => [
      {
        name: "type",
        label: "Категория товара",
        type: "radio",
        options: [
          { id: "Treat", label: "Лакомства" },
          // { id: "Souvenirs", label: "Аксессуары" },
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
    [],
  );

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Card
      sx={(theme) => ({
        borderRadius: 3,
        boxShadow: theme.shadows[1],
        p: 2,
        background: theme.palette.grey[100],
        maxHeight: "calc(100vh - 112px)",
        overflowY: "auto",
      })}
    >
      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
        Фильтры
      </Typography>
      <Divider sx={{ mb: 1.5 }} />

      <Grid2
        container
        spacing={1.5}
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-offset={100}
        data-aos-duration={600}
      >
        {filters.map(({ name, label, type, options, dynamic, chipColor }) => (
          <Grid2 key={name} size={12}>
            <Accordion disableGutters elevation={0} sx={{ bgcolor: "transparent" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ px: 0.5, minHeight: 44 }}
              >
                <FormLabel sx={{ fontSize: 13, color: "secondary", mb: 0 }}>
                  {label}
                </FormLabel>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0.5, pt: 1, pb: 1.5 }}>
                {type === "radio" ? (
                  <FormControl fullWidth>
                    <RadioGroup
                      value={(homePageQuery as any)[name] || ""}
                      onChange={handleRadioChange(name)}
                    >
                      {(dynamic ? (foodDicts as any)[name] : options).map(
                        (opt: any) => (
                          <FormControlLabel
                            key={opt.id}
                            value={opt.id}
                            control={<Radio size="small" />}
                            label={opt.label || opt.name}
                          />
                        ),
                      )}
                    </RadioGroup>
                  </FormControl>
                ) : (
                  <FormControl fullWidth>
                    <Select
                      multiple
                      size="small"
                      sx={{
                        "& .MuiSelect-select": {
                          py: 1,
                        },
                      }}
                      value={
                        (homePageQuery as any)[name]
                          ? String((homePageQuery as any)[name]).split(",")
                          : []
                      }
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
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {(selected as string[]).map((val) => {
                            const item = (foodDicts as any)[name].find(
                              (i: any) => String(i.id) === val,
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
              </AccordionDetails>
            </Accordion>
          </Grid2>
        ))}
      </Grid2>

      <Divider sx={{ my: 2 }} />
      <Button fullWidth size="small" color="inherit" onClick={handleResetAll}>
        Сбросить фильтры
      </Button>
    </Card>
  );
}
