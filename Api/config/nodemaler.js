const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  host:"smtp.gmail.com",
  port: 465,
  secure: true,
  service: 'gmail',
  auth: {
    user: 'andreaochoaispuru@gmail.com', 
    pass: 'vwyb uzjh hwsy nets'
  }
});

transporter.verify().then(()=> console.log("gmail enviado con exito!!")).catch((error) => console.log(error));


module.exports = transporter;