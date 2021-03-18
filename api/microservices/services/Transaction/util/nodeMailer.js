const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');
const { htmlTemplate } = require('./htmlTemplate');
const { htmlTemplatePdf } = require('./htmlTemplatePdf');
const path = require("path")

const EMAIL_PRUEBA = 'inro-wallet@outlook.com';
const SENDGRID_API = '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';

// const icono = require('PONER LINK CLOUDINARY')
//TODO importar
const pdf = require('html-pdf');

/* const content = `
<h1>Título en el PDF creado con el paquete html-pdf</h1>
<p>Generando un PDF con un HTML sencillo</p>
`; */
let pdfCreate =(amount, name )=>{
  pdf.create(htmlTemplatePdf(amount, name , new Date())).toFile('./html-pdf.pdf', function(err, res) {
    if (err){
        console.log(err);
    } else {
        console.log(res);
    }
  });
}



  const transporter = nodemailer.createTransport({
    service: "gmail.com",
    port: 588,
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
  const { email, codeSecurity} = props;
  const data = {
    from: "regtest.luc@gmail.com",
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

let sendEmailPdf = props => {
   
  const { email, name, date, amount} = props;
    const data = {
      from: "regtest.luc@gmail.com",
      to: `${email}`,
      subject: "Recarga de Inro",
      html: htmlTemplate(amount,name,date),
      attachments: [{
        filename: 'Nueva_Recarga.pdf',
        path:  "C:/Users/Lucho/Documents/Henry/banko/henry-bank/api/microservices/services/Transaction/html-pdf.pdf",
        contentType: 'application/pdf'
      }]
    }
  
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
  sendEmail,
  sendEmailPdf,
  pdfCreate
}
