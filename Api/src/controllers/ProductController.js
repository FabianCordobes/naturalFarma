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

const putProducts = async (id, brand, category, therapeuticAction, presentation, stocks, price, image) => {
    try {
        const product = await Product.findByPk(id);

        if (!product) {
            throw new Error('El producto no se encontró.');
        }
        product.brand = brand;
        product.category = category;
        product.therapeuticAction = therapeuticAction;
        product.presentation = presentation;
        product.stocks = stocks;
        product.price = price;
        product.image = image;

        await product.save();

        return product;
    } catch (error) {
        throw new Error(`Error al actualizar el producto: ${error.message}`);
    }
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
