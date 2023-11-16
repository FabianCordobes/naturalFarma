const {Router} = require ("express")
const nodemailerHandler = require ("../handlers/nodemailerHandler")
const transporter = require("../../config/nodemaler")

const nodemailerRouter = Router();

nodemailerRouter.post("/",async function (req, res){
    try {
        const { email } = req.body;
    
        // Verifica que la dirección de correo electrónico esté definida
        if (!email) {
          return res.status(400).json("Dirección de correo electrónico no proporcionada");
        }
    
        // Resto del código para enviar el correo electrónico
        const result = await transporter.sendMail({
          from: 'andreaochoaispuru@gmail.com',
          to: email,
          subject: 'Tu compra fue realizada con éxito',
          text: 'Natural Farma agradece tu compra, que tenga buen día',
        });
    
        res.status(200).json("Mensaje enviado con éxito");
      } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json("Error al enviar el correo");
      }
})


module.exports = nodemailerRouter;