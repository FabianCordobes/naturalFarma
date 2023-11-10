const { Router } = require("express");
const productRouter = require ("../routes/Product")
const userRouter = require ("../routes/UserRouter")

const categoryRouter = require ("../routes/CategoryRouter")

const loginRouter = require ("../routes/LoginRouter")

const admin = require("../routes/adminRoutes")
const paymentRouter = require("../routes/PaymentRoutes")
const reviewRouter= require("../routes/ReviewRouter")
 


const router = Router();

router.use("/product", productRouter)
router.use("/user", userRouter)

router.use("/category", categoryRouter)
router.use("/admin", admin)

router.use("/login", loginRouter)
router.use("/order", paymentRouter)
router.use("/review", reviewRouter)

module.exports = router;