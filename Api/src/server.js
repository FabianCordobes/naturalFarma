const express = require("express");
const routes = require('./routes/index.js');
const morgan = require("morgan");
const cors = require("cors");
const router = require('./routes/index')

const server = express();
// Para ver nuestras peticiones por consola
server.use(morgan("dev"));
// Para detectar la estructura json
server.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
}); // Para que mi servidor no se rompa al conectar con el browser.
server.use(express.json());
// Middleware cors, permite que cualquier cliente se conecte
server.use(cors());
// Cualquier solicitud a la ruta raíz del servidor seran manejada por las rutas definidas en routes.
server.use('/', routes);

module.exports = server;
