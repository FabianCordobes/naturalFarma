const {Router} = require("express");
const {createUserHandler, getUserHandler, deleteUserHandler, putUserHandler, getUserByIdHandler} = require("../handlers/UserHandler");


const userRouter = Router();

userRouter.post("/", createUserHandler);

// userRouter.get("/", getUserHandler);

// userRouter.get("/:id", getUserByIdHandler );

// userRouter.put("/:id", putUserHandler);

// userRouter.delete("/:id", deleteUserHandler);

module.exports = userRouter;