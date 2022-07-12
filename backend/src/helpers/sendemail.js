const nodemailer = require("nodemailer");

//dbmaxkaozfsdfkhv

async function sendEmail(to) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "starbuy.ecommerce@gmail.com",
      pass: "dbmaxkaozfsdfkhv",
    },
  });

  const info = await transporter.sendMail({
    from: '"Starbuy" <starbuy@eccom.com>', // sender address
    to: to, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = sendEmail;
