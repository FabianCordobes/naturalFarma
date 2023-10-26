//const { post } = require("../routes");
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

const getProductsByName = async (brand) => {
    const productsName = await Product.findAll({ where: { brand: brand } });
    return productsName;
};
    
const getAllProducts = async () => {
    const allProductsDb = await Product.findAll();
    return allProductsDb;
};

const deleteProducts = async(id) => await Product.destroy({where: {id}});


module.exports = {
    createProductController,
    getAllProducts,
    getProductsByName,
    deleteProducts
};
