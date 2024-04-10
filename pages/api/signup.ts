import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { isValidEmail } from "../../src/validation/validators";
import isEmpty from "../../src/helpers";
import md5 from "md5";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const email = req.body.email as string;
  try {
    if (!isValidEmail(email)) {
      throw new Error("SOMETHING_WRONG");
    }
    const result = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!isEmpty(result)) {
      console.log("-- EMAIL_EXISTS --\n", result);
      throw new Error("EMAIL_EXISTS");
    }

    // Insert a new user record.
    try {
      const resp = await prisma.user.create({
        data: {
          name: req.body.name as string,
          email,
          password: md5(req.body.name as string),
        },
      });
      res.status(200).json({
        message: "success",
        data: resp,
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } catch (error: any) {
    // unhide to check error
    res.status(400).json({ message: error.message });
  }
}
