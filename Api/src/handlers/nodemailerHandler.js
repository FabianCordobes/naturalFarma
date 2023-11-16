// const nodemailerHandler = async (req, res) => {
//     try {
//       const { email } = req.params;
  
//       // Verifica que la dirección de correo electrónico esté definida
//       if (!email) {
//         return res.status(400).json("Dirección de correo electrónico no proporcionada");
//       }
  
//       // Resto del código para enviar el correo electrónico
//       const result = await transporter.sendMail({
//         from: 'andreaochoaispuru@gmail.com',
//         to: email,
//         subject: 'Tu compra fue realizada con éxito',
//         text: 'Mercado Pago',
//       });
  
//       console.log({ result });
//       res.status(200).json("Mensaje enviado con éxito");
//     } catch (error) {
//       console.error('Error al enviar el correo:', error);
//       res.status(500).json("Error al enviar el correo");
//     }
//   };
  
//   module.exports = nodemailerHandler;