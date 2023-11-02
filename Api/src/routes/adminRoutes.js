const express = require('express');
const adminController = require('../controllers/adminController');
const adminHandler = require('../handlers/adminHandler');

const router = express.Router();

router.get('/admin', adminHandler.isAdmin);

module.exports = router;
