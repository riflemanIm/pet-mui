import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { sign } from "jsonwebtoken";
import md5 from "md5";
import * as cookie from "cookie";
import { withCORS } from "../_utils";

type UserSafe = {
  id: number;
  email: string;
  name: string | null;
  balance: any; // Decimal; вернётся строкой
  accessToken: string;
  refreshToken: string;
  token: string; // access token (для совместимости с фронтом)
};

const ACCESS_TTL = 60 * 15; // 15 минут
const REFRESH_TTL = 60 * 60 * 24 * 30; // 30 дней

function setAuthCookies(
  res: NextApiResponse,
  accessToken: string,
  refreshToken: string
) {
  const isProd = process.env.NODE_ENV === "production";
  const cookies = [
    cookie.serialize("accessToken", accessToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: ACCESS_TTL,
    }),
    cookie.serialize("refreshToken", refreshToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: REFRESH_TTL,
    }),
  ];
  res.setHeader("Set-Cookie", cookies);
}

export default withCORS(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserSafe | { error: string }>
) {
  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { email, password } = req.body as {
      email?: string;
      password?: string;
    };
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // TODO: заменить md5 на bcrypt/argon2. Сейчас оставлено для совместимости.
    const user = await prisma.user.findFirst({
      where: { email, password: md5(password) },
      select: { id: true, email: true, name: true, balance: true },
    });
    console.log("user", user);
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const payload = { id: user.id, email: user.email, name: user.name };
    const accessToken = sign(
      payload,
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: `${ACCESS_TTL}s` }
    );
    const refreshToken = sign(
      payload,
      process.env.REFRESH_TOKEN_SECRET as string,
      { expiresIn: `${REFRESH_TTL}s` }
    );

    // Кладём токены в httpOnly cookies
    setAuthCookies(res, accessToken, refreshToken);

    // Возвращаем пользователя + access token в поле token (чтобы фронт не падал)
    const safeUser: UserSafe = {
      ...user,
      token: accessToken,
      accessToken,
      refreshToken,
    };
    return res.status(200).json(safeUser);
  } catch (error: any) {
    console.error("Error Sign In:\n", error?.message || error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
