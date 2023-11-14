const {Router} = require("express");
const { createHistorytHandler, getHistoryByIdUserHandler } = require ("../handlers/HistoryHandler");

const historyRouter = Router();

historyRouter.post("/", createHistorytHandler);
historyRouter.get("/", getHistoryByIdUserHandler); 

module.exports = historyRouter;