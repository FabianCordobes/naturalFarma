const { post } = require("../routes");
const axios = require ("axios");
const {Product} = require ("../db");

const createProductController = async (
            brand,
            category,
            therapeuticAction,
            presentation,
            stocks,
            price,
            image,
            )=>{
        const newProduct = await Product.create({
            brand,
            category,
            therapeuticAction,
            presentation,
            stocks,
            price,
            image, 
        });          
        console.log(newProduct);
        return newProduct;
    };


module.exports = {
    createProductController,
}