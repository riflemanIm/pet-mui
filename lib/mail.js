import nodemailer from "nodemailer";

const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASS = process.env.MAIL_PASS;

const hasMailAuth = Boolean(MAIL_USER && MAIL_PASS);
const transporter = hasMailAuth
  ? nodemailer.createTransport({
      service: process.env.MAIL_SERVICE || "gmail",
      host: process.env.MAIL_HOST || "smtp.gmail.com",
      port: Number(process.env.MAIL_PORT || 587),
      secure:
        String(process.env.MAIL_SECURE || "false").toLowerCase() === "true",
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    })
  : null;

const SENDMAIL = async (mailDetails, callback) => {
  if (!hasMailAuth || !transporter) {
    const error = new Error(
      "MAIL_USER и MAIL_PASS не заданы. Отправка email отключена."
    );
    callback(null, error);
    return;
  }

  try {
    const info = await transporter.sendMail(mailDetails);
    callback(info, null);
  } catch (error) {
    callback(null, error);
    console.log("\n ----- SENDMAIL ------ error \n ", error);
  }
};
export const HTML_TEMPLATE = (text) => {
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Shepherd</title>
          <style>
            .container {
              width: 100%;
              height: 100%;
              padding: 20px;
              color: #000;
              background-color: #fffafa;
            }
            .email-header {
              background-color: #2c4464;
              color: #fff;
              padding: 10px;
              text-align: center;              
            }
            .email-body {
              padding: 20px;
              background-color: #fff;
              color: #000;
            }
            .email-footer {
              background-color: #fff;
              color: #000;
              padding: 10px;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            
              <div class="email-header">
              <h1>Shepherd</h1>
              </div>

              <div class="email-body">
                ${text}
              </div>

              <div class="email-footer">
                <p><a href="https://s-pet.ru/" target="_blank">Shepherd TM</a> - лакомства для животных</p>
              </div>



          </div>
        </body>
      </html>
    `;
};
export default SENDMAIL;
