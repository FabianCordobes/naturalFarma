const { Router } = require("express");
const productsRouter = require('./Product')

const router = Router();

//Rutas Principales 

router.use('/products', productsRouter)

module.exports = router;