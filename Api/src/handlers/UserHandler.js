const {User} = require ("../db");
const {createUserController, deleteUserController,
     getUserDeleteController, getAllUserControllers, restoreUserController,putUserController} = require ("../controllers/UserController")


const createUserHandler = async (req , res) => {
    try {
        const {
            name,
            lastName,
            birthdate,
            nationality
      } = req.body
        const response = await createUserController(
            name,
            lastName,
            birthdate,
            nationality
            );
            res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    };
};


const deleteUserHandler = async (req , res) => {
    const { id } = req.params;

    try {
        if(!id){
            throw Error(`${id} Usuario inexistente.`)
        }else{
            const deleteUser = await deleteUserController(id)
            res.status(200).json(deleteUser + "Usuario borrado con éxito")
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

    const getUserDeleteHandler = async (req, res) => {
        try {
          const deletedUsers = await getUserDeleteController();
          res.status(200).json(deletedUsers);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

    const getAllUserHandler = async (req, res) => {
        try {
          const getallUser = await getAllUserControllers();
          res.status(200).json(getallUser);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }


    const restoreUserHandler = async(req, res) => {
        const { id } = req.params;
        try {
            if(!id){
                throw Error(`${id} usuario inexistente.`)
            }else{
                const restoreUser = await restoreUserController(id)
                res.status(200).json(restoreUser+"El Usuario ha sido restaurado con éxito")
            }
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }  

    const putUserHandler = async (req, res) => {
        const { id } = req.params;
    const {name,lastName,birthdate,nationality } = req.body;
    try {
        if (!name ||  !lastName ||  !birthdate || !nationality) {
            throw new Error('Falta información para modificar el Usuario.');
        }

        const editUser = await putUserController(id,name,lastName,birthdate,nationality);
        return res.status(201).json(editUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    }
module.exports = {
    createUserHandler,
    deleteUserHandler,
    getUserDeleteHandler,
    getAllUserHandler,
    restoreUserHandler,
    putUserHandler,
}