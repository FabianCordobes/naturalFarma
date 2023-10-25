const {getProductsByName, getAllProducts} = require('../controllers/ProductController')

const getProductsHandler = async (req, res) => {

    const {brand} = req.query;

    if (brand) {
        
        // Llama al controlador que trae el producto por nombre
        const ProductsByName = await getProductsByName(brand);

        // Responde con un mensaje de éxito
        res.status(200).json(ProductsByName);

    } else {

        // Llama al controlador que trae todas las actividades
        const allProducts = await getAllProducts();

         // Responde con un mensaje de éxito
        res.status(200).json(allProducts);

    };
};

module.exports = {
    getProductsHandler,
}