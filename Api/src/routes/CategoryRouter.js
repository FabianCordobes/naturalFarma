const {Router} = require("express");
const {createCategoryHandler, getCategoryHandler, getCategoryByIdHandler, deleteCategoryHandler, putCategoryHandler} = require("../handlers/CategoryHandler");

const categoryRouter = Router();

categoryRouter.post("/", createCategoryHandler );

categoryRouter.get("/", getCategoryHandler);

categoryRouter.get("/:id", getCategoryByIdHandler );

categoryRouter.put("/:id", putCategoryHandler);

categoryRouter.delete("/:id", deleteCategoryHandler);

module.exports = categoryRouter;