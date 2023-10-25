const {Router} = require("express");
const {createProductHandler, getProductsHandler} = require("../handlers/ProductHanldler");


const productRouter = Router();

productRouter.post("/", createProductHandler)

productRouter.get("/", getProductsHandler)

module.exports = productRouter;
