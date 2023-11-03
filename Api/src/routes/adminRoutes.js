const express = require('express');
const {crearAdmin} = require('../controllers/adminController');

const router = express.Router();

router.post('/crear', crearAdmin);

module.exports = router;
