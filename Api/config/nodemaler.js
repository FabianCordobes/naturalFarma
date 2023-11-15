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

// const enviarCorreo = async (toEmail, name) => {
//     try {
//       await transporter.sendMail({
//         from: 'andreaochoaispuru@gmail.com',
//         to: toEmail,
//         subject: 'Compra realizada en Mercado Pago',
//         text: 'Se ha realizado una compra en Mercado Pago.',
//         html: `<h1>${name} tu compra se realizó con éxito</h1>`
//       });
//       console.log('Correo enviado');
//     } catch (error) {
//       console.error('Error al enviar el correo:', error);
//     }
//   };

module.exports = transporter;
// enviarCorreo