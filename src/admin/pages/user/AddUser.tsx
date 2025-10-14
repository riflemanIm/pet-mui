// src/pages/user/AddUser.tsx
import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Widget from "../../components/Widget";
import {
  actions,
  useManagementDispatch,
  useManagementState,
} from "../../context/ManagementContext";
import { UserDto } from "../../helpers/dto";
import useForm from "../../hooks/useForm";
import validate from "./validation";

export default function AddUser() {
  const navigate = useNavigate();
  const dispatch = useManagementDispatch();
  const { saveLoading, errorMessage } = useManagementState();

  const onSuccess = () => navigate("/user/list");
  const onError = (msg: string) => {
    // при желании тут можно показать snackbar
    console.error("Create error:", msg);
  };

  const save = () => {
    // простая проверка пароля на клиенте (бек всё равно проверит)
    if (!values.password || String(values.password).trim() === "") {
      // можно через setErrors в твоём useForm, но чтобы не тянуть — просто выходим
      console.warn("Password is required");
      return;
    }

    const role = (values.role as UserDto["role"]) ?? "User";
    const payload: UserDto = {
      ...values,
      role,
      name:
        values.name && String(values.name).trim() !== "" ? values.name : null,
      // balance оставляем как есть (string/decimal)
    };

    actions.doCreate(payload, onSuccess, onError)(dispatch);
  };

  const { values, errors, handleChange, setValues } = useForm<UserDto, any>(
    save,
    validate
  );

  useEffect(() => {
    setValues((prev) => {
      if ((prev as UserDto).role) return prev;
      return { ...prev, role: "User" } as UserDto;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveDisabled = useMemo(
    () => !!errors?.email || !!errors?.balance || !!errors?.role || saveLoading,
    [errors, saveLoading]
  );

  return (
    <Widget>
      <Box display="flex" flexDirection="column" gap={2} maxWidth={520}>
        <TextField
          name="email"
          label="Email"
          value={values.email ?? ""}
          onChange={handleChange}
          error={!!errors?.email}
          helperText={errors?.email || ""}
          autoComplete="email"
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          value={values.password ?? ""}
          onChange={handleChange}
          autoComplete="new-password"
        />
        <TextField
          name="name"
          label="Name"
          value={(values.name as any) ?? ""}
          onChange={handleChange}
        />
        <TextField
          name="balance"
          label="Balance (string/decimal)"
          value={values.balance ?? ""}
          onChange={handleChange}
          error={!!errors?.balance}
          helperText={errors?.balance || ""}
          inputProps={{ inputMode: "decimal" }}
        />
        <TextField
          select
          name="role"
          label="Role"
          value={values.role ?? "User"}
          onChange={handleChange}
          error={!!errors?.role}
          helperText={errors?.role || ""}
        >
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="User">User</MenuItem>
        </TextField>
        <Stack direction="row" gap={2} justifyContent="flex-end">
          <Button variant="outlined" onClick={() => navigate("/user/list")}>
            Cancel
          </Button>
          <Button variant="contained" onClick={save} disabled={saveDisabled}>
            {saveLoading ? "Saving…" : "Save"}
          </Button>
        </Stack>

        {errorMessage ? (
          <span style={{ color: "#d32f2f" }}>{errorMessage}</span>
        ) : null}
      </Box>
    </Widget>
  );
}
