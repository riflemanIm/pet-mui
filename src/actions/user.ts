import axios from "axios";
import { ConfirmCodeProps, SendEmailProps, SignUpProps } from "../types";

export type SignRequest = { email: string; name?: string };

export async function sign(
  values: SignRequest,
  setSignState: React.Dispatch<React.SetStateAction<SignUpProps | undefined>>
) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/sign`,
      values
    );
    if (res.status !== 200) throw new Error(`${res.status} - ${res.data}`);
    setSignState(res.data as SignUpProps);
  } catch (error) {
    return { error };
  }
}

export async function confirmCode(
  values: ConfirmCodeProps,
  setSignState: React.Dispatch<React.SetStateAction<SignUpProps | undefined>>
) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/confirm`,
      values
    );
    if (res.status !== 200) throw new Error(`${res.status} - ${res.data}`);
    setSignState(res.data as SignUpProps);
  } catch (error) {
    return { error };
  }
}

export async function sendEmail(
  values: SendEmailProps,
  setState: React.Dispatch<React.SetStateAction<any>>
) {
  try {
    // см. примечание выше про маршрут
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/email`,
      values
    );
    if (res.status !== 200) throw new Error(`${res.status} - ${res.data}`);
    setState(res.data);
  } catch (error) {
    return { error };
  }
}
