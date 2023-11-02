const {Router} = require('express');
const authController = require('../controllers/authController');
const authHandler = require('../handlers/authHandler');

const authroutes = Router();

authroutes.post('/login', authHandler.login);

module.exports = authroutes;
