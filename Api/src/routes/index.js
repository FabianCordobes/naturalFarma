const { Router } = require("express");
const productRouter = require ("../routes/Product")

const router = Router();

router.use("/product", productRouter)

//router.use('/products', productRouter)


module.exports = router;