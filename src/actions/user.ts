import axios from "axios";
//import isEmpty, { getError } from "../helpers";
import { ConfirmCodeProps, CurrentUserProps } from "types";

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

export async function signup(
  values: Omit<CurrentUserProps, "id">,
  setSignState: React.Dispatch<React.SetStateAction<undefined>>
) {
  try {
    console.log("-------------signup----------", values);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/signup`,
      values
    );
    console.log("-------------response.data----------", response.data);
    if (response.status !== 200) {
      throw new Error(`${response.status} - ${response.data}`);
    }
    setSignState(response.data);
    //return response.data as SignUpProps;
  } catch (error) {
    console.log(error);
    return { error };
  }
}
export async function confirmCode(
  values: ConfirmCodeProps,
  setSignState: React.Dispatch<React.SetStateAction<undefined>>
) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/confirm`,
      values
    );
    console.log("-------------response.data----------", response.data);
    if (response.status !== 200) {
      throw new Error(`${response.status} - ${response.data}`);
    }
    setSignState(response.data);
    //return response.data as SignUpProps;
  } catch (error) {
    console.log(error);
    return { error };
  }
}
