const {Router} = require("express");
const {createUserHandler, getUserDeleteHandler, deleteUserHandler, restoreUserHandler,
     getAllUserHandler} = require("../handlers/UserHandler");


const userRouter = Router();

userRouter.post("/", createUserHandler);

// Esta ruta te trae todo los User creados 
userRouter.get("/", getAllUserHandler);

// Esta ruta te trae todos los User que eliminaste 
userRouter.get("/eliminados", getUserDeleteHandler); 

// Esta ruta hace un borrado lógico por ID sobre los User osea que los oculta pero en un futuro pueden ser retornados por el admin
userRouter.delete("/:id", deleteUserHandler);

// Esta ruta busca el User por ID y restaura el User eliminado osea que restaura Usuario Oculto
userRouter.patch("/:id", restoreUserHandler);



module.exports = userRouter;