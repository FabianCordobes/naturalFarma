const axios = require ("axios");
const {Product, Category, Review} = require ("../db");
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

        const findCategory = await Category.findAll({where: {description: category}})

        await newProduct.addCategories(findCategory);

        console.log("esta es la categoria"+findCategory);
    
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
    const produc = await Product.findAll({include: {
        model: Category,
        attributes: ["description"],
        through: {
          attributes: []
        }
      } })
    return produc;
};

const getProductById = async (id) => {
    const productFilter = await Product.findAll({
      where: { id },
      include: Review, 
    });
  
    return productFilter;
  };

  const putProducts = async (id, editedData) => {
    try {
      const product = await Product.findByPk(id);
  
      if (!product) {
        throw new Error('El producto no se encontró.');
      }
  
      if (editedData && typeof editedData === 'object') {
        product.stocks = parseInt(editedData.stocks);
        product.price = parseInt(editedData.price);
      }
  
      await product.save();
  
      return product;
    } catch (error) {
      console.error('Error during product update:', error.message);
      throw new Error(`Error al actualizar el producto: ${error.message}`);
    }
  };

const deleteProducts = async(id) => await Product.destroy({where: {id}});


module.exports = {
    createProductController,
    getAllProducts,
    getProductsByName,
    deleteProducts,
    putProducts,
    getProductById
};
