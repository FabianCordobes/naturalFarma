const {Router} = require("express");
const {createUserHandler, getUserDeleteHandler, deleteUserHandler, restoreUserHandler,
     getAllUserHandler, putUserHandler,getUserIDHandler} = require("../handlers/UserHandler");


const userRouter = Router();

// Crea una usario
userRouter.post("/", createUserHandler);

// Esta ruta te trae todo los User creados 
userRouter.get("/", getAllUserHandler);

// Esta ruta te trae todos los User que eliminaste 
userRouter.get("/eliminados", getUserDeleteHandler); 

// Esta ruta hace un borrado lógico por ID sobre los User osea que los oculta pero en un futuro pueden ser retornados por el admin
userRouter.delete("/:id", deleteUserHandler);

// Esta ruta busca los User por ID (vale aclarar q no busca los User eliminados)
userRouter.get("/:id", getUserIDHandler);

// Esta ruta busca el User por ID y restaura el User eliminado osea que restaura Usuario Oculto
userRouter.patch("/:id", restoreUserHandler);

// Esta ruta actualiza el Usuario
userRouter.put("/:id", putUserHandler);


module.exports = userRouter;