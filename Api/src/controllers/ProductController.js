//const { post } = require("../routes");
const axios = require ("axios");
const {Product, Category} = require ("../db");
const { Op, where } = require('sequelize');

const createProductController = async (
            brand,
            therapeuticAction,
            presentation,
            stocks,
            price,
            image,
            category
            )=>{
        const newProduct = await Product.create({
            brand,
            therapeuticAction,
            presentation,
            stocks,
            price,
            image, 
        });          
        console.log(newProduct);

        const findCategory = await Category.findAll({where: {description: category}})
    
        await newProduct.addCategories(findCategory);
    
      const produc = await Product.findAll({include: {
        model: Category,
        attributes: ["description"],
        through: {
          attributes: []
        }
      } })
    


        return produc;
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

const putProducts = async (id, brand, therapeuticAction, presentation, stocks, price, image) => {
    try {
        const product = await Product.findByPk(id);

        if (!product) {
            throw new Error('El producto no se encontró.');
        }
        product.brand = brand;
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
