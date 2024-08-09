import axios from "axios";
//import isEmpty, { getError } from "../helpers";
import { ConfirmCodeProps, CurrentUserProps, SendEmailProps } from "types";

export async function sign(
  values: Omit<CurrentUserProps, "id|balance|token">,
  setSignState: React.Dispatch<React.SetStateAction<undefined>>
) {
  try {
    console.log("------------- sign ----------", values);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/sign`,
      values
    );
    console.log("------------- response.data ----------", response.data);
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

export async function sendEmail(
  values: SendEmailProps,
  setState: React.Dispatch<React.SetStateAction<undefined>>
) {
  try {
    console.log("------------- sign ----------", values);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/sign`,
      values
    );
    console.log("------------- response.data ----------", response.data);
    if (response.status !== 200) {
      throw new Error(`${response.status} - ${response.data}`);
    }
    setState(response.data);
    //return response.data as SignUpProps;
  } catch (error) {
    console.log(error);
    return { error };
  }
}
