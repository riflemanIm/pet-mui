import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "oleglambin@gmail.com",
    pass: "tyfb ehvm wwgi gope",
  },
});
const SENDMAIL = async (mailDetails, callback) => {
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
