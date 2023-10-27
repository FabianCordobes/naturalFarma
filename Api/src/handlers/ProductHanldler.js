const {createProductController, getProductsByName, getAllProducts, deleteProducts, getProductById, putProducts} = require ("../controllers/ProductController")

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

  try {
       if (brand) {
            const productsByName = await getProductsByName(brand);
            if (!productsByName.length ) {
                 throw Error(`${brand} no se encuentró.`);
            }else {
                return res.status(200).json(productsByName);
            }
        } else {
           const allProducts = await getAllProducts();
           return res.status(200).json(allProducts); 
        }
  } catch (error) {
        res.status(500).json({error:error.message});
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
    console.log("holaaa"+id)
    const { brand, category, therapeuticAction, presentation, stocks, price, image } = req.body;
    try {
        if (!brand ||  !category ||  !therapeuticAction || !presentation ||  !stocks ||  !price ||  !image) {
            throw new Error('Falta información para modificar el producto.');
        }

        const editProduct = await putProducts(id, brand, category, therapeuticAction, presentation, stocks, price, image);
        return res.status(201).json(editProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

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
    getProductByIdHandler
};