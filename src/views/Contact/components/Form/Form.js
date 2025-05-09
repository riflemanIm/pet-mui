/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { Link } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import isEmpty from "helpers";
import { currentUserState } from "atoms";
import { useRecoilValue } from "recoil";
import MKTypography from "components/MKTypography";

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Пожалуйста введите Ваше имя")
    .max(50, "Пожалуйста введите правильное имя")
    .required("Пожалуйста введите Ваше имя"),
  email: yup
    .string()
    .trim()
    .email("Пожалуйста введите правильный Email")
    .required("Пожалуйста введите Email"),
  message: yup
    .string()
    .trim()
    .min(5, "Пожалуйста введите текст письма")
    .max(250, "Текст письма не должен превыжать 250 символов")
    .required("Пожалуйста введите текст письма"),
  // password: yup
  //   .string()
  //   .required("Please specify your password")
  //   .min(5, "The password should have at minimum length of 5"),
});

const Form = () => {
  const onSubmit = (values) => {
    sign(values, setSignState);
  };
  const currentUser = useRecoilValue(currentUserState);
  const initialValues = {
    name:
      currentUser != null
        ? currentUser.name
        : process.env.NODE_ENV === "development"
        ? "Olegus"
        : "",
    email:
      currentUser != null
        ? currentUser.email
        : process.env.NODE_ENV === "development"
        ? "oleglambin@gmail.com"
        : "",
    message: process.env.NODE_ENV === "development" ? "text of letter" : "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <MKTypography variant="h4">Свяжитесь с нами</MKTypography>
      <Box
        padding={{ xs: 3, sm: 6 }}
        width={1}
        component={Card}
        boxShadow={1}
        marginBottom={4}
      >
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Ваше имя"
                variant="outlined"
                color="primary"
                size="medium"
                name="name"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                name="email"
                fullWidth
                inputProps={{ maxLength: 50 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Текст письма"
                multiline
                rows={6}
                variant="outlined"
                color="primary"
                size="medium"
                name="message"
                fullWidth
              />
            </Grid>
            <Grid item container justifyContent={"center"} xs={12}>
              <Button
                sx={{ height: 54, minWidth: 150 }}
                variant="contained"
                color="primary"
                size="medium"
                type="submit"
                fullWidth
                disabled={!isEmpty(formik.errors)}
              >
                Отправить
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item container justifyContent={"center"} xs={12}>
              <Box>
                <Typography
                  variant={"subtitle2"}
                  color={"text.secondary"}
                  align={"center"}
                >
                  Нажав на кнопку "Отправить", вы соглашаетесь{" "}
                  <Link
                    component={"a"}
                    color={"primary"}
                    href={"/company-terms"}
                    underline={"none"}
                  >
                    с правилами и условиями нашей компании.
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box>
        <Typography color="text.secondary" align={"center"}>
          Мы вам ответим в течении 1-2 рабочих дня.
        </Typography>
      </Box>
    </Box>
  );
};

export default Form;
