const {Router} = require("express");
const {createUserHandler, getUserDeleteHandler, deleteUserHandler, restoreUserHandler,
     getAllUserHandler, putUserHandler,getUserIDHandler} = require("../handlers/UserHandler");


const userRouter = Router();

userRouter.post("/", createUserHandler);

userRouter.get("/", getAllUserHandler);

userRouter.get("/eliminados", getUserDeleteHandler); 

userRouter.delete("/:id", deleteUserHandler);

userRouter.get("/:id", getUserIDHandler);

userRouter.patch("/:id", restoreUserHandler);

userRouter.put("/:id", putUserHandler);


module.exports = userRouter;
