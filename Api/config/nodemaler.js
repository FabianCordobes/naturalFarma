const nodemailer = require('nodemailer');

// Configurar el transporte del correo
const transporter = nodemailer.createTransport({
  host:"snpt.gmail.com",
  port: 465,
  secure: true,
  service: 'Gmail',
  auth: {
    user: 'andreaochoaispuru@gmail.com', // Reemplaza con tu dirección de correo Gmail
    pass: 'vwyb uzjh hwsy nets' // Reemplaza con tu contraseña
  }
});

transporter.verify().then(()=> console.log("gmail enviado con exito!!")).catch((error) => console.log(error));

module.exports = transporter;