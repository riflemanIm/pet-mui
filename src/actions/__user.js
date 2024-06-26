import axios from "axios";
import isEmpty, { getError } from "../helpers";

export async function getOzonGoodsCategoryTree() {
  try {
    const { data } = await axios.post(
      "https://api-seller.ozon.ru/v1/description-category/tree",
      {
        //category_id: 17027487,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Api-Key": process.env.NEXT_PUBLIC_OZ_API_KEY,
          "Client-Id": "1468751",
        },
      }
    );
    console.log("data--", data);
    return data;
  } catch (error) {
    console.log("error", getError(error));
  }
}

export async function getOzonGoodsCategoryAttributes() {
  try {
    const { data } = await axios.post(
      "https://api-seller.ozon.ru/v1/description-category/attribute",
      {
        description_category_id: 17028670,
        language: "DEFAULT",
        type_id: 91926,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Api-Key": process.env.NEXT_PUBLIC_OZ_API_KEY,
          "Client-Id": "1468751",
        },
      }
    );

    return data;
  } catch (error) {
    console.log("error", getError(error));
  }
}
export async function getOzonGoodsCategoryAttributeValue(
  attribute_id,
  name = ""
) {
  try {
    const { data } = await axios.post(
      "https://api-seller.ozon.ru/v1/description-category/attribute/values",
      {
        description_category_id: 17028670,
        language: "DEFAULT",
        type_id: 91926,
        attribute_id,
        limit: 1000,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Api-Key": process.env.NEXT_PUBLIC_OZ_API_KEY,
          "Client-Id": "1468751",
        },
      }
    );
    console.log("--", name, data);
    return data;
  } catch (error) {
    return;
    console.log("-- name--", "error", getError(error));
  }
}

export async function getOzonGoods() {
  try {
    const { data } = await axios.post(
      "https://api-seller.ozon.ru/v4/product/info/prices",
      {
        filter: {
          offer_id: [],
          product_id: [],
          visibility: "ALL",
        },
        last_id: "",
        limit: 1000,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Api-Key": process.env.NEXT_PUBLIC_OZ_API_KEY,
          "Client-Id": "1468751",
        },
      }
    );
    console.log("-- getOzonGoods--", data);
    return data;
  } catch (error) {
    //console.log("-- name--", name, "error", getError(error));
  }
}

export async function getCountries() {
  try {
    const postData = {
      method: "Get",
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/countries`,
      postData
    );
    console.log("data--", data);
    return data;
  } catch (error) {
    console.log("error", getError(error));
  }
}

export async function getIpData(setValues) {
  try {
    const { data } = await axios.get("https://api.ipify.org/?format=json");
    setValues({
      // login: "support",
      // password: "pmtsupport",
      // version: "8.105",
      // code: "ABCDEF09",
      // reason_standart: "Плановые работы",
      // reason: "работы",
      ip: data.ip,
    });
  } catch (error) {
    console.log("error", error);
  }
}
export async function loginUser(dispatch, login, password) {
  if (login.length > 0 && password.length > 0) {
    dispatch({
      type: "LOADING",
    });
    await axios
      .post("/api/signin", {
        login,
        password,
      })
      .then(({ data }) => {
        //console.log("data", data);
        if (!isEmpty(data))
          dispatch({
            type: "LOGIN",
            payload: data,
          });
        else
          dispatch({
            type: "SET_SERVER_RESPONSE",
            payload: { serverResponse: "Комбинация логин/пароль не верна" },
          });
      })
      .catch((err) => {
        console.log("  ---- err ---", err?.message);
        dispatch({
          type: "SET_SERVER_RESPONSE",
          payload: { serverResponse: err?.message },
        });
      });
  } else {
    dispatch({ type: "LOGIN_FAILURE" });
  }
}

export async function signup(values) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/signup`,
      values
    );
    if (response.status !== 200) {
      throw new Error(`${response.status} - ${response.data}`);
    }
    return { content: response.data };
  } catch (error) {
    console.error(error);
    return { error, content: {} };
  }
}

// export async function checkAuth(dispatch, token) {
//   //console.log("checkAuth", token);

//   if (!isEmpty(token)) {
//     // dispatch({
//     //   type: "LOADING",
//     // });
//     await axios
//       .post("/api/check-auth", {
//         token,
//       })
//       .then(({ data }) => {
//         //console.log("check-auth", data);
//         if (data.token === token)
//           dispatch({
//             type: "SET_USER",
//             payload: {
//               isAuthenticated: true,
//             },
//           });
//         else
//           dispatch({
//             type: "SET_SERVER_RESPONSE",
//             payload: "WRONG",
//           });
//       })
//       .catch((err) => {
//         console.log("  ---- err ---", err?.message);
//         dispatch({
//           type: "SIGN_OUT_SUCCESS",
//           payload: err?.message,
//         });
//       });
//   }
// }

export async function sendFormEmail({ setSend, bilet, values, locale }) {
  setSend({
    isLoaded: false,
    response: null,
  });
  await axios
    .post("/api/send-form", {
      bilet,
      locale,
      ...values,
    })
    .then(({ data }) => {
      //console.log("addOrder", data);
      if (data.sent === "ok")
        setSend({
          isLoaded: true,
          sent: "ok",
          response: "Собщение отправлено",
        });
    })
    .catch((err) => {
      console.log("====== sendFormEmail =======", getError(err));
      setSend({
        isLoaded: true,
        sent: "error",
        response: getError(err),
      });
    });
}

export async function getRescueLicence(dispatch, values, user) {
  dispatch({
    type: "LOADING",
  });
  await axios
    .post("/api/lic", {
      ...values,
      user,
    })
    .then(({ data }) => {
      if (!isEmpty(data))
        dispatch({
          type: "RESCUE_LICENCE",
          payload: data.lic,
        });
      else
        dispatch({
          type: "SET_SERVER_RESPONSE",
          payload: { serverResponse: "WRONG_RESCUE_LICENCE" },
        });
    })
    .catch((err) => {
      console.log("  ---- err ---", err?.message);
      dispatch({
        type: "SET_SERVER_RESPONSE",
        payload: { serverResponse: err?.message },
      });
    });
}
