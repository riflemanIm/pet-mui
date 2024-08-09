import { NextApiRequest, NextApiResponse } from "next";
import SENDMAIL, { HTML_TEMPLATE } from "../../lib/mail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  /** --------- send mail -------------- */
  const from = req.body.email as string;
  const fromName = req.body.name as string;

  const to = process.env.SITE_EMAIL;
  const toName = process.env.SITE_EMAIL_NAME;

  const text = req.body.message as string;
  try {
    //console.log("req.body", req.body);
    const options = {
      from: `"${fromName}" <${from}>`, // sender address
      to: `${toName} <${to}>`, // receiver email      subject: `Site form. ${req.body.email} `, // Subject line
      subject: `From Site`, // Subject line
      text: req.body.message,
      html: HTML_TEMPLATE(`${text}`),
    };

    SENDMAIL(options, (info: string, error: any) => {
      if (info != null) {
        console.log("Email sent successfully");
        // console.log("info: ", info);
        res.status(200).json({ sent: "ok", info });
      } else if (error != null) {
        throw new Error("Error send mail");
      }
    });
  } catch (error) {
    // unhide to check error
    res.status(500).json({ message: error.message });
  }
}
