import type { NextApiRequest, NextApiResponse } from "next";
import { withCORS } from "../_utils";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const isProd = process.env.NODE_ENV === "production";

  res.setHeader("Set-Cookie", [
    "accessToken=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax" +
      (isProd ? "; Secure" : ""),
    "refreshToken=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax" +
      (isProd ? "; Secure" : ""),
  ]);

  return res.status(200).json({ message: "Logged out" });
}

export default withCORS(handler);
