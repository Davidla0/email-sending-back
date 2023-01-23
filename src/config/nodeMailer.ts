import { Email } from "../api/email.service";
import logger from "./logger.config";
const nodemailer = require("nodemailer");

async function sendEmail({to, subject, text}:Email) {

  var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "289938dec3824b",
    pass: "54beecef5f247b"
  }
});

  let info = await transport.sendMail({
    from: '<robot@lala.com>',
    to: to,
    subject: subject,
    text: text,
    html: `<b>${text}</b>`,
  }, (err: any, info:any) => {
    if (err) {
      logger.error(err)
      throw Error(err)
    }
    logger.info(`sent ${info.response}`);

  });

}


export default sendEmail
