const {Router} = require("express");
const {createProductHandler, getProductsHandler, deleteProductHandler, putProductsHandler, getProductByIdHandler} = require("../handlers/ProductHanldler");


const productRouter = Router();

productRouter.post("/", createProductHandler);

productRouter.get("/", getProductsHandler);

productRouter.get("/:id", getProductByIdHandler );

productRouter.put("/:id", putProductsHandler);

productRouter.delete("/:id", deleteProductHandler);

module.exports = productRouter;