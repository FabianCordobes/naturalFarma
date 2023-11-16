const {createProductController, getProductsByName, getAllProducts, deleteProducts, getProductById, putProducts} = require ("../controllers/ProductController")
const { Category } = require("../db");

const createProductHandler = async (req , res) => {
    try {
        const {brand,
            therapeuticAction,
            presentation,
            stocks,
            price,
            image,
            category
      } = req.body
        const response = await createProductController(
            brand,
            therapeuticAction,
            presentation,
            stocks,
            price,
            image,
            category
            );
            res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    };
};


const getProductsHandler = async (req, res) => {
    const { brand } = req.query;
  
    try {
      if (brand) {
        const productsByName = await getProductsByName(brand);
        if (!productsByName.length) {
          throw Error(`${brand} no se encontró.`);
        } else {
          return res.status(200).json(productsByName);
        }
      } else {
        const allProducts = await getAllProducts({ include: Category });  // Incluir la relación con la categoría
        return res.status(200).json(allProducts);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const getProductByIdHandler = async ( req, res) => {

    const { id } = req.params;

    try {
        if ( id ) {
            const productId = await getProductById( id );
            if ( !productId.length ) throw Error(`El producto ${id} no existe.`);
            else return res.status(200).json(productId);
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }

}

const putProductsHandler = async (req, res) => {
    const { id } = req.params;
    const editedData = req.body;

    try {

        const editProduct = await putProducts(id, editedData);


        return res.status(200).json(editProduct);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(400).json({ error: error.message });
    }
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
    deleteProductHandler,
    putProductsHandler,
    getProductByIdHandler,
};