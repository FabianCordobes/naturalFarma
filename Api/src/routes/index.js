const { Router } = require("express");
const productRouter = require ("../routes/Product")
const userRouter = require ("../routes/UserRouter")

const router = Router();

router.use("/product", productRouter)
router.use("/user", userRouter)

module.exports = router;