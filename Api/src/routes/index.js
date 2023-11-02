const { Router } = require("express");
const productRouter = require ("../routes/Product")
const userRouter = require ("../routes/UserRouter")
const loginRouter = require ("../routes/loginRouter")


const router = Router();

router.use("/product", productRouter)
router.use("/user", userRouter)
router.use("/login", loginRouter)


module.exports = router;