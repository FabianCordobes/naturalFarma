const { Router } = require("express");
const productRouter = require ("../routes/Product")
const userRouter = require ("../routes/UserRouter")

const categoryRouter = require ("../routes/CategoryRouter")

const loginRouter = require ("../routes/loginRouter")



const router = Router();

router.use("/product", productRouter)
router.use("/user", userRouter)

router.use("/category", categoryRouter)

router.use("/login", loginRouter)



module.exports = router;