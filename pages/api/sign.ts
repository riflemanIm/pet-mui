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
      const name = req.body.name ? (req.body.name.trim() as string) : "";

      // Check valid email
      if (!isValidEmail(email)) {
        throw new Error("SOMETHING_WRONG");
      }

      // Check if email exists
      const result = await prisma.user.findFirst({
        where: {
          email,
        },
      });

      console.log("req.body", req.body, result);
      // Login user
      if (result) {
        // Insert a Confirm Code record and send response
        insertNewCode(result.id, res);
        return;
      }

      // Create new user record.
      try {
        const newUser = await prisma.user.create({
          data: {
            email,
            name,
          },
        });

        //console.log("newUser", newUser);
        // Insert a Confirm Code record and send response
        insertNewCode(newUser.id, res);
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

async function insertNewCode(id: number, res: NextApiResponse) {
  const newCode = randomCode();
  try {
    const uuidNew = randomUUID();
    await prisma.userConfirmCode.create({
      data: {
        userId: id,
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
}
