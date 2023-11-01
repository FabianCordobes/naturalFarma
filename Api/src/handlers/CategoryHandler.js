const { createCategoryController, getCategoryByName, getAllCategories, getCategoryById, deleteCategories, putCategory } = require ("../controllers/CategoryController");

const createCategoryHandler = async (req , res) => {
    try {
        const { description } = req.body
        const response = await createCategoryController( description );
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message}) 
    }
}

const getCategoryHandler = async (req, res) => {
  
    const {description} = req.query;
  
    try {
         if (description) {
              const categoryByName = await getCategoryByName(description);
              if (!categoryByName.length ) {
                   throw Error(`${description} no se encuentró.`);
              }else {
                  return res.status(200).json(categoryByName);
              }
          } else {
             const allCategory = await getAllCategories();
             return res.status(200).json(allCategory); 
          }
    } catch (error) {
          res.status(500).json({error:error.message});
    }
};

const getCategoryByIdHandler = async ( req, res) => {

    const { id } = req.params;

    try {
        if ( id ) {
            const categoryId = await getCategoryById( id );
            if ( !categoryId.length ) throw Error(`La categoria ${id} no existe.`);
            else return res.status(200).json(categoryId);
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

const putCategoryHandler = async (req, res) => {

    const { id } = req.params;
    const { description } = req.body;
    try {
        if ( !description ) {
            throw new Error('Falta información para modificar la categoria.');
        }

        const editCategory = await putCategory(id, description);
        return res.status(201).json(editCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const deleteCategoryHandler = async (req , res) => {
    const { id } = req.params;

    try {
        if(!id){
            throw Error(`${id} no existe para borrar.`)
        }else{
            const deleteCategory = await deleteCategories(id)
            res.status(200).json(deleteCategory)
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {
    createCategoryHandler,
    getCategoryHandler,
    getCategoryByIdHandler,
    putCategoryHandler,
    deleteCategoryHandler
}