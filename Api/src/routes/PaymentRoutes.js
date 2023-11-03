const {Router} = require("express");
const { placeOrder, succesfulPurchase } = require ("../handlers/PaymentHandlers");

const paymentRouter = Router();

paymentRouter.post("/", placeOrder);
paymentRouter.get("/", succesfulPurchase);

module.exports = paymentRouter;