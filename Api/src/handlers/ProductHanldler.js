const {createProductController, getProductsByName, getAllProducts, deleteProducts} = require ("../controllers/ProductController")

const createProductHandler = async (req , res) => {
    try {
        const {brand,
            category,
            therapeuticAction,
            presentation,
            stocks,
            price,
            image,
      } = req.body
        const response = await createProductController(
            brand,
            category,
            therapeuticAction,
            presentation,
            stocks,
            price,
            image,
            );
            res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    };
};


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

const deleteProductHandler = async (req , res) => {
    const { id } = req.params;

    try {
        if(!id){
            throw Error(`${id} no existe para borrar.`)
        }else{
            const deleteProduct = await deleteProducts(id)
            res.status(200).json(deleteProduct)
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {
    createProductHandler,
    getProductsHandler,
    deleteProductHandler
};