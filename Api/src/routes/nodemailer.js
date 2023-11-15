const {Router} = require ("express")
const enviarCorreo = require ("../../config/nodemaler")

const nodemailer = Router();
nodemailer.post("/", async (req, res) => {
  const { gmail, name } = req.body;

  await enviarCorreo(gmail, name);
  res.status(200).json({ message: 'Correo enviado con éxito' });
});

module.exports = nodemailer; 