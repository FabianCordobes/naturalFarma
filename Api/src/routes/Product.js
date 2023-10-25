const {Router} = require('express')
const {getProductsHandler} = require('../handlers/ProductHandler');

const productsRouter = Router();

//Rutas de Products

productsRouter.get('/', getProductsHandler) //LLama al handler 

module.exports = productsRouter