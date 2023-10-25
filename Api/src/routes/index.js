const { Router } = require("express");
const {updateProduct} = require('./updateController')

const router = Router();

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { history, login, product, user } = req.body

    if(!history || !login || !product || !user) return res.status(403).json({ error: 'Faltan datos para modificar el producto'})

    const productUpdated = updateProduct({id, history, login, product, user})

    if(!productUpdated) return res.status(403).json({
        error: "No existe productos con el ID indicado"
    })
    return res.status(200).json(productUpdated)
})

module.exports = router;