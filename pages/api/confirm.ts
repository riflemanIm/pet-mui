import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import isEmpty from "../../src/helpers";
import { sign } from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    /* --------------- Check code ------------------ */
    if (req.body.code && req.body.uuid) {
      const code = req.body.code.trim() as string;
      const uuid = req.body.uuid.trim() as string;

      const result = await prisma.userConfirmCode.findFirst({
        where: {
          code,
          uuid,
          tryDate: null,
        },
      });
      if (isEmpty(result)) {
        //console.log("-- DOSNT_EXISTS_CODE --\n", result);
        return res.status(200).json({
          response: "DOSNT_EXISTS_CODE",
        });
      }
      if (result && !compareDate(result.createdAt, 5)) {
        return res.status(200).json({
          response: "CODE_EXPIRED",
        });
      }

      try {
        // update user
        const newUser = {
          ...(await prisma.user.update({
            data: {
              authType: "ConfirmCode",
            },

            where: {
              id: result?.userId,
            },
            select: {
              balance: true,
              email: true,
              id: true,
              name: true,
            },
          })),
          token: "",
        };
        // update userConfirmCode
        try {
          await prisma.userConfirmCode.update({
            data: {
              tryDate: new Date(),
            },
            where: {
              uuid,
            },
          });
          // Create token
          const userForToken = {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name,
          };
          const token = sign(userForToken, process.env.TOKEN_KEY as string, {
            expiresIn: "31d",
          });
          // save user token
          newUser.token = token;
          res.status(200).json({
            response: "USER_AUTH",
            user: newUser,
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

// compare dates
function compareDate(d: Date, diffMimutes: number) {
  const today = new Date();

  const diffMin = today.getMinutes() - d.getMinutes();
  console.log("diffMin", diffMin);
  if (diffMin >= diffMimutes) return false;
  return true;
}
