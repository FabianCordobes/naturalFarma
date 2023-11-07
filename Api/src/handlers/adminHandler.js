
const {createAdminController, deleteAdminController,
    getUserDeleteController, getAllAdminControllers, restoreUserController,putUserController,getUserByIdController} = require ("../controllers/adminController")


    const createAdminHandler = async (req, res) => {
        try {
          const {
            email,
            password,
            name,
            lastName,
            birthdate,
            nationality,
            isAdmin,
          } = req.body;
          const response = await createAdminController(
            email,
            password,
            name,
            lastName,
            birthdate,
            nationality,
            isAdmin,
          );
      
          res.status(200).json(response);
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      };

      
const deleteAdminHandler = async (req , res) => {
    const { id } = req.params;

    try {
        if(!id){
            throw Error(`${id} Admin inexistente.`)
        }else{
            const deleteUser = await deleteAdminController(id)
            res.status(200).json(deleteUser + "Admin borrado con éxito")
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const getAllAdminHandler = async (req, res) => {
    try {
      const getallAdmin = await getAllAdminControllers();
      res.status(200).json(getallAdmin);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

    module.exports = {
        createAdminHandler,
        deleteAdminHandler,
        getAllAdminHandler
    }