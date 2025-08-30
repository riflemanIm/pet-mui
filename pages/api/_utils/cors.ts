// pages/api/_utils/cors.ts
import type { NextApiRequest, NextApiResponse } from "next";

const ALLOWED_ORIGINS = [
  //process.env.ADMIN_ORIGIN!, // например, https://admin.example.com
  "http://localhost:3010",
];

export function withCORS(
  handler: (req: NextApiRequest, res: NextApiResponse) => any
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const origin = req.headers.origin || "";
    if (ALLOWED_ORIGINS.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
      res.setHeader("Vary", "Origin");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PUT,PATCH,DELETE,OPTIONS"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );
    }
    if (req.method === "OPTIONS") return res.status(200).end();
    return handler(req, res);
  };
}
