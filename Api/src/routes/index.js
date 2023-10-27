const { Router } = require("express");
const productRouter = require ("../routes/Product")

const router = Router();

router.use("/product", productRouter)

module.exports = router;