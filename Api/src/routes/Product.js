const {Router} = require("express");
const {createProductHandler, getProductsHandler, deleteProductHandler} = require("../handlers/ProductHanldler");


const productRouter = Router();

productRouter.post("/", createProductHandler)

productRouter.get("/", getProductsHandler)

productRouter.delete('/:id', deleteProductHandler)

module.exports = productRouter;
