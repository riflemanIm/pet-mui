/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import isEmpty from "helpers";
import { confirmCode } from "actions/user";
import { Alert, Fade } from "@mui/material";

const validationSchema = yup.object({
  code: yup
    .string()
    .matches(/^[0-9]{6}$/, "Пожалуйста введите правильный код подтверждения")
    .required("Пожалуйста введите код подтверждения"),
});

const ConfirnCode = ({ signState, setSignState }) => {
  const initialValues = {
    code: "",
    uuid: signState?.uuid,
  };

  const onSubmit = (values) => {
    confirmCode(values, setSignState);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <Box mb={4}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
          }}
        >
          Введите код подтверждения
        </Typography>
        <Typography color="text.secondary" fontSize={14} marginBottom={6}>
          Проверь Ваш Email или телефон
        </Typography>
        {signState?.response !== "CODE_SENT" && (
          <Fade
            in={!!signState?.response}
            style={
              signState?.response == null
                ? { display: "none" }
                : { display: "flex" }
            }
          >
            <Alert severity="error">
              <Typography variant="h6">{signState?.response}</Typography>
            </Alert>
          </Fade>
        )}
      </Box>
      {signState?.response !== "USER_AUTH" && (
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                label="Введите код подтверждения *"
                variant="outlined"
                name="code"
                fullWidth
                value={formik.values.code}
                onChange={formik.handleChange}
                error={formik.touched.code && Boolean(formik.errors.code)}
                helperText={formik.touched.code && formik.errors.code}
              />
            </Grid>

            <Grid item container xs={12}>
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={{ xs: "stretched", sm: "center" }}
                justifyContent={"space-between"}
                width={1}
                maxWidth={600}
                margin={"0 auto"}
              >
                <Button
                  size={"large"}
                  variant={"contained"}
                  type={"submit"}
                  disabled={!isEmpty(formik.errors)}
                >
                  Зарегистрироваться
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              container
              xs={12}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                variant={"subtitle2"}
                color={"text.secondary"}
                align={"center"}
              >
                Нажав на кнопку "Зарегистрироваться", вы соглашаетесь{" "}
                <Link
                  component={"a"}
                  color={"primary"}
                  href={"/company-terms"}
                  underline={"none"}
                >
                  с правилами и условиями нашей компании.
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      )}
    </Box>
  );
};

export default ConfirnCode;
