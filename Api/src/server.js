const express = require("express");
const routes = require('./routes/index.js');
const morgan = require("morgan");
const cors = require("cors");

const server = express();
// Para ver nuestras peticiones por consola
server.use(morgan("dev"));
// Para detectar la estructura json
server.use(express.json());
// Middleware cors, permite que cualquier cliente se conecte
server.use(cors());
// Cualquier solicitud a la ruta raíz del servidor seran manejada por las rutas definidas en routes.
server.use('/', routes);

// probando una ruta
server.get('/users', (req, res) => {
    res.send('holi');
})

module.exports = server;
