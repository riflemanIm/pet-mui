import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { sign } from "actions/user";
import { Alert, Fade } from "@mui/material";

const validationSchema = yup.object({
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

const Form = ({ signState, setSignState }) => {
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
      <Box marginBottom={4}>
        <Typography variant="h4" color="text.secondary">
          Введите email и Вам придет код подтверждения
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
          {/* <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "center" }}
              justifyContent={"space-between"}
              width={1}
              marginBottom={2}
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant={"subtitle2"}>
                  Enter your password
                </Typography>
              </Box>
              <Typography variant={"subtitle2"}>
                <Link
                  component={"a"}
                  color={"primary"}
                  href={"/password-reset-simple"}
                  underline={"none"}
                >
                  Forgot your password?
                </Link>
              </Typography>
            </Box>
            <TextField
              label="Password *"
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
                  Если у вас нет аккаунт?{" "}
                  <Link
                    component={"a"}
                    color={"primary"}
                    href={"/signup"}
                    underline={"none"}
                  >
                    Вам сюда
                  </Link>
                </Typography>
              </Box>
              <Button size={"large"} variant={"contained"} type={"submit"}>
                Войти
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
