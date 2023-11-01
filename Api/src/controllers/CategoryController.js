const axios = require ("axios");
const {Category} = require ("../db");
const { Op, where } = require('sequelize');

const createCategoryController = async ( description ) =>{

    const categoriesName = await Category.findAll({
        where: {description}})

    if ( !categoriesName.length ){ 
    
    const newCategory = await Category.create({ description });          
  
    return newCategory;
    } else {
        throw new Error('La categoria ya existe.');
    }
};

const getCategoryByName = async (description) => {

    const categoriesName = await Category.findAll({
        where:
        { description:
        {[Op.iLike]:
        `%${description}%`
    }}})

    return categoriesName;
};
    
const getAllCategories = async () => {
    const allCategoriesDb = await Category.findAll();
    return allCategoriesDb;
};


const getCategoryById = async ( id ) => {

    const categoryFilter = await Category.findAll({ where:{ id } } );


    return categoryFilter;
}

const putCategory = async (id, description) => {
    try {
        const category = await Category.findByPk(id);

        if (!category) {
            throw new Error('La categoria no se encontró.');
        }
        category.description = description;

        await category.save();

        return category;
    } catch (error) {
        throw new Error(`Error al actualizar la categoria: ${error.message}`);
    }
}

const deleteCategories = async(id) => await Category.destroy({where: {id}});

module.exports = {
    createCategoryController,
    getCategoryByName,
    getAllCategories,
    getCategoryById,
    putCategory,
    deleteCategories
};