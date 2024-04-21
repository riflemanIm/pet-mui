import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { isValidEmail } from "../../src/validation/validators";
import isEmpty from "../../src/helpers";
//import md5 from "md5";
import { randomInt, randomUUID } from "node:crypto";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    /* --------------- Getting code ------------------ */

    if (req.body.email) {
      const email = req.body.email.trim() as string;

      // check valid email
      if (!isValidEmail(email)) {
        throw new Error("SOMETHING_WRONG");
      }

      // check if email exists
      const result = await prisma.user.findFirst({
        where: {
          email,
        },
      });
      if (!isEmpty(result)) {
        console.log("-- EMAIL_EXISTS --\n", result);
        return res.status(200).json({
          response: "EMAIL_EXISTS",
        });
        //throw new Error("EMAIL_EXISTS");
      }

      // Insert a new user record.
      try {
        const newUser = await prisma.user.create({
          data: {
            email,
          },
        });

        //console.log("newUser", newUser);
        const newCode = randomCode();

        // Insert a Confirm Code record.
        try {
          const uuidNew = randomUUID();
          await prisma.userConfirmCode.create({
            data: {
              userId: newUser.id,
              code: newCode,
              uuid: uuidNew,
              createdAt: new Date(),
            },
          });
          res.status(200).json({
            response: "CODE_SENT",
            uuid: uuidNew,
          });
        } catch (error: any) {
          res.status(500).json({ message: error.message });
        }
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    }
  } catch (error: any) {
    // unhide to check error
    res.status(400).json({ message: error.message });
  }
}

// 6 digits, change the random max number and pad length if you need 5 digits
function randomCode() {
  return randomInt(1000_000).toString().padStart(6, "0");
}
