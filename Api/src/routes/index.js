const { Router } = require("express");
const productRouter = require ("../routes/Product")

const router = Router();

router.use("/product", productRouter)

router.use('/products', productRouter)

    if(!productUpdated) return res.status(403).json({
        error: "No esxiste productos con el ID indicado"
    })
    return res.status(200).json(productUpdated)
})

module.exports = router;