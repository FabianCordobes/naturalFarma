const {Router} = require("express");
const {putHandler} = require("../handlers/putHandler");


const putRouter = Router();

putRouter.post('/:id', putHandler)



module.exports = putRouter;