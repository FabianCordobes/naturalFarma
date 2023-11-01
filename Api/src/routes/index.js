const { Router } = require("express");
const productRouter = require ("../routes/Product")
const userRouter = require ("../routes/UserRouter")
const authRoutes = require('./authRoutes');
//const adminRoutes = require('./adminRoutes');



const router = Router();

router.use("/product", productRouter)
router.use("/user", userRouter)
router.use("/auth", authRoutes)
//router.use("/admin", adminRoutes)



module.exports = router;