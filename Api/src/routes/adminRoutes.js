const express = require('express');
const {createAdminHandler,deleteAdminHandler, getAllAdminHandler} = require('../handlers/adminHandler');

const router = express.Router();

// Esta ruta creo Admin
router.post('/', createAdminHandler);

// Trae todos los Admin
router.get('/', getAllAdminHandler);

// Esta ruta elimina Admin por ID 
router.delete('/:id', deleteAdminHandler);

module.exports = router;
