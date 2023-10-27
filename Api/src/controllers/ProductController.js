//const { post } = require("../routes");
const axios = require ("axios");
const {Product} = require ("../db");
const { Op, where } = require('sequelize');

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

    const productsName = await Product.findAll({
        where:
        { brand:
        {[Op.iLike]:
        `%${brand}%`
    }}})

    return productsName;
};
    
const getAllProducts = async () => {
    const allProductsDb = await Product.findAll();
    return allProductsDb;
};


const getProductById = async ( id ) => {

    const productFilter = await Product.findAll({ where:{ id } } );


    return productFilter;
}

const putProducts = async ( id, brand, category, therapeuticAction, presentation, stocks, price, image ) => {
    console.log(id)
    const productEdit = await getProductById(id);
    console.log(productEdit);
    productEdit.update({
        brand: brand,
        category: category,
        therapeuticAction: therapeuticAction,
        presentation: presentation,
        stocks: stocks,
        price: price,
        image: image
    })
    return productEdit;
}

const deleteProducts = async(id) => await Product.destroy({where: {id}});


module.exports = {
    createProductController,
    getAllProducts,
    getProductsByName,
    deleteProducts,
    putProducts,
    getProductById
};
