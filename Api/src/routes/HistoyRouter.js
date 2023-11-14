const {Router} = require("express");
const { createHistorytHandler, getHistoryByIdUserHandler } = require ("../handlers/HistoryHandler");

const historyRouter = Router();

historyRouter.post("/", createHistorytHandler);
historyRouter.get("/:id", getHistoryByIdUserHandler); 

module.exports = historyRouter;