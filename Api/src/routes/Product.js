const {Router} = require("express");
const {createProductHandler} = require("../handlers/ProductHanldler");


const productRouter = Router();

productRouter.post("/",createProductHandler)

module.exports = productRouter;