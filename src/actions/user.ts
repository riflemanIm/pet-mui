import axios from "axios";
//import isEmpty, { getError } from "../helpers";
import { ProfilerProps } from "react";

// export async function loginUser(dispatch, login, password) {
//   if (login.length > 0 && password.length > 0) {
//     dispatch({
//       type: "LOADING",
//     });
//     await axios
//       .post("/api/signin", {
//         login,
//         password,
//       })
//       .then(({ data }) => {
//         //console.log("data", data);
//         if (!isEmpty(data))
//           dispatch({
//             type: "LOGIN",
//             payload: data,
//           });
//         else
//           dispatch({
//             type: "SET_SERVER_RESPONSE",
//             payload: { serverResponse: "Комбинация логин/пароль не верна" },
//           });
//       })
//       .catch((err) => {
//         console.log("  ---- err ---", err?.message);
//         dispatch({
//           type: "SET_SERVER_RESPONSE",
//           payload: { serverResponse: err?.message },
//         });
//       });
//   } else {
//     dispatch({ type: "LOGIN_FAILURE" });
//   }
// }

export async function signup(values: Omit<ProfilerProps, "id">) {
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
