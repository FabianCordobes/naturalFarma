const axios = require ("axios");
const {Product, Review} = require ("../db");

const createReviewController = async (description, punctuation, productId) => {
    
      const newReview = await Review.create({ description, punctuation, productId });
  
      const product = await Product.findByPk(productId);
  
      await newReview.setProduct(product);
  
      return newReview;
  };

const getAllReviewControllers = async () => {

    const review = await Review.findAll({include: {
        model: Product,
        } })

    return review;    
};

module.exports = {
    createReviewController,
    getAllReviewControllers
}