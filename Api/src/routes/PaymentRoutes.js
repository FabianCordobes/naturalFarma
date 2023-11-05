const {Router} = require("express");
const { placeOrder, succesfulPurchase } = require ("../handlers/PaymentHandlers");

const paymentRouter = Router();

paymentRouter.post("/", placeOrder);// Ruta para el procesamiento de la compra
paymentRouter.get("/", succesfulPurchase); // Ruta para procesar el redireccionamiento de una compra exitosa

module.exports = paymentRouter;