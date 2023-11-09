const {Router} = require("express");
const { createReviewHandler, getReviewHandler } = require ("../handlers/ReviewHandler");

const reviewRouter = Router();

reviewRouter.post("/", createReviewHandler );
reviewRouter.get("/", getReviewHandler ); 

module.exports = reviewRouter;