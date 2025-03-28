const express = require('express');
const {createAdminHandler,deleteAdminHandler, getAllAdminHandler} = require('../handlers/adminHandler');

const router = express.Router();

router.post('/', createAdminHandler);

router.get('/', getAllAdminHandler);

router.delete('/:id', deleteAdminHandler);

module.exports = router;
