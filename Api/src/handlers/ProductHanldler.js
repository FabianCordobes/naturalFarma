const {createProductController} = require ("../controllers/ProductController")

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

module.exports = {
    createProductHandler,
}