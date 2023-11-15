const {Router} = require ("express")
const transporte = require ("../../config/nodemaler")

const nodemailer = Router();

nodemailer.post("/", async (req, res) => {
    const {gmail, name} = req.body;

    await transporte.sendMail({
        from: 'andreaochoaispuru@gmail.com',
        to: gmail,
        subject: 'Compra realizada en Mercado Pago',
        text: 'Se ha realizado una compra en Mercado Pago.',
        html: `<h1>${name} tu compra se realizó con éxito</h1>`
      });
})    

module.exports = nodemailer; 