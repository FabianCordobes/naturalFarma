const { createReviewController, getAllReviewControllers } = require("../controllers/ReviewController");
const { Product } = require("../db");

const createReviewHandler = async (req, res) => {
    try {
        const { description, punctuation, productId } = req.body
        const response = await createReviewController(description, punctuation, productId);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getReviewHandler = async (req, res) => {

    try {
        const allReview = await getAllReviewControllers({ include: Product });  // Incluir la relación con la categoría
        return res.status(200).json(allReview);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createReviewHandler,
    getReviewHandler
}