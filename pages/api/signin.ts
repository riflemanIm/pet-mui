import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { sign } from "jsonwebtoken";

import md5 from "md5";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  //const route = req.body.route;
  //console.log("==body==", req.body);
  //const prefix = req.body.locale === "en" ? `${req.body.locale}_` : "";

  const email = req.body.email;
  const password = md5(req.body.password);

  try {
    const user = {
      ...(await prisma.user.findFirst({
        where: {
          email,
          password,
        },
      })),
      token: "",
    };

    if (user.id != null) {
      // Create token
      const token = sign(user, process.env.TOKEN_KEY as string, {
        expiresIn: "31d",
      });

      // save user token
      user.token = token;

      res.status(200).json(user);
    } else res.status(200).json(null);
  } catch (error: any) {
    // unhide to check error
    console.error("Error Sign In:\n", error.message);
    res.status(500).json({
      message: error.message,
    });
  }
}
