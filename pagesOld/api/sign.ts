import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { isValidEmail } from "../../srcOld/validation/validators";
import isEmpty from "../../srcOld/helpers";
//import md5 from "md5";
import { randomInt, randomUUID } from "node:crypto";
import { Decimal } from "@prisma/client/runtime/library";
import { $Enums } from "@prisma/client";
import SENDMAIL, { HTML_TEMPLATE } from "../../lib/mail";

type NewUserType = {
  id: number;
  balance: Decimal;
  email: string;
  password: string | null;
  name: string | null;
  authType: $Enums.AuthType | null;
  createdAt: Date;
};
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
        insertNewCode(result, res);
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

        insertNewCode(newUser, res);
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

async function insertNewCode(newUser: NewUserType, res: NextApiResponse) {
  const newCode = randomCode();
  const to = newUser.email;
  const toName = newUser.name;

  const from = process.env.SITE_EMAIL;
  const fromName = process.env.SITE_EMAIL_NAME;

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
    //console.log("req.body", req.body);
    const options = {
      from: `"${fromName}" <${from}>`, // sender address
      to: `${toName} <${to}>`, // receiver email
      subject: `Код подтверждения. Shepherd`, // Subject line
      text: "",
      html: HTML_TEMPLATE(("Ваш код подтверждения: " + newCode) as string),
    };

    SENDMAIL(options, (info: string, error: any) => {
      if (info != null) {
        console.log("Email sent successfully");
        // console.log("info: ", info);
        //res.status(200).json({ sent: "ok", info });
      } else if (error != null) {
        throw new Error("Error send mail");
      }
    });
    res.status(200).json({
      response: "CODE_SENT",
      uuid: uuidNew,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
