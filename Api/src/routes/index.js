const { Router } = require("express");
const productRouter = require ("../routes/Product")
const putRouter = require("../routes/PutRouter")

const router = Router();

router.use("/product", productRouter)

//router.use('/products', productRouter)

router.use('/:id', putRouter)



   
   

module.exports = router;