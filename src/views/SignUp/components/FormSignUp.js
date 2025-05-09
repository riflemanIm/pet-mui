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
import { sign } from "actions/user";
import { Alert, Fade } from "@mui/material";

const validationSchema = yup.object({
  // name: yup
  //   .string()
  //   .trim()
  //   .min(2, "Please enter a valid name")
  //   .max(50, "Please enter a valid name")
  //   .required("Please specify your last name"),
  email: yup
    .string()
    .trim()
    .email("Пожалуйста введите правильный Email")
    .required("Пожалуйста введите Email"),
  // password: yup
  //   .string()
  //   .required("Please specify your password")
  //   .min(5, "The password should have at minimum length of 5"),
});

const FormSignUp = ({ signState, setSignState }) => {
  const initialValues = {
    email: process.env.NODE_ENV === "development" ? "oleglambin@gmail.com" : "",
  };

  const onSubmit = (values) => {
    sign(values, setSignState);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
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
          Регистрация
        </Typography>
        <Typography color="text.secondary" fontSize={14} marginBottom={6}>
          У нас упрощенная регистрация. Просто введите email, Вам придет код
          подтверждения, далее введите его в форму.
        </Typography>
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
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              label="Введите Ваше имя"
              variant="outlined"
              name="name"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            {/* <Typography variant={"subtitle2"} sx={{ marginBottom: 2 }}>
              Enter your email
            </Typography> */}
            <TextField
              label="Введите Ваш Email *"
              variant="outlined"
              name={"email"}
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              label="Введите Ваш пароль *"
              variant="outlined"
              name={"password"}
              type={"password"}
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid> */}
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
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant={"subtitle2"}>
                  У Вас уже есть аккаунт?{" "}
                  <Link
                    component={"a"}
                    color={"primary"}
                    href={"/signin"}
                    underline={"none"}
                  >
                    Войдите
                  </Link>
                </Typography>
              </Box>
              <Button
                size={"large"}
                variant={"contained"}
                type={"submit"}
                disabled={!isEmpty(formik.errors)}
              >
                Зарегистрироваться и Войти
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
    </Box>
  );
};

export default FormSignUp;
