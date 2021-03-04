const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');
const { htmlTemplate } = require('./htmlTemplate');

const EMAIL_PRUEBA = 'inro-wallet@outlook.com';
const SENDGRID_API = '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';

// const icono = require('PONER LINK CLOUDINARY')
//TODO importar

const transporter = nodemailer.createTransport({
  service: "gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: `regtest.luc@gmail.com`,
    pass: `jcbskvkejovdppsx`,
  },
});

// const transporter = nodemailer.createTransport(
//   sendGridTransport({
//     auth: {
//       api_key: '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',
//     },
//   })
// );


let sendEmail = props => {
  const { name, lastName, email, codeSecurity} = props;

  const data = {
    from: "Inro",
    to: `${email}`,
    subject: "Verificacion de email",
    html: htmlTemplate(codeSecurity)
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(data, (err, info) => {
      if (!err) {
        resolve(info)
      } else {
        reject(err);
      }
    });
  })
}


module.exports = {
  sendEmail
}
