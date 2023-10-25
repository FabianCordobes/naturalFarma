const express = require("express");

const morgan = require("morgan");
const cors = require("cors");

const server = express();
// Para ver nuestras peticiones por consola
server.use(morgan("dev"));
// Para detectar la estructura json
server.use(express.json());
// Middleware cors, permite que cualquier cliente se conecte
server.use(cors());

// probando una ruta
server.get('/users', (req, res) => {
    res.send('holi');
})

module.exports = server;
