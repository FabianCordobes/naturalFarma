const { Product } = require('../db');

const getProductsByName = async (brand) => {
    const productsName = await Product.findAll({ where: { brand: brand } });
    return productsName;
};

const getAllProducts = async () => {
    const allProductsDb = await Product.findAll();
    return allProductsDb;
};
  

module.exports = {
    getAllProducts,
    getProductsByName
  }