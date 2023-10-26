const { Router } = require("express");
const {putHandler} = require('../handlers/putHandler')

const router = Router();

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { brand, category, therapeuticAction, presentation, stocks, price, image } = req.body

    if(!brand || !category || !therapeuticAction || !presentation || !stocks || !price || !image) return res.status(403).json({ error: 'Faltan datos para modificar el producto'})

    const handlerPut = putHandler({id, brand, therapeuticAction, presentation, stocks, price, image})

    if(!handlerPut) return res.status(403).json({
        error: "No existen productos con el ID indicado"
    })
    return res.status(200).json(handlerPut)
})

module.exports = router;