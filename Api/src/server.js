const express = require("express");
const router = require('./routes/index.js');
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(cors()); //Permite que cualquier cliente se conecte 

server.use(morgan("dev")); //Registra tus peticiones en la terminal.

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

server.use(express.json()); //Funcion de parseo que detecta que es un json.

server.use(router); //Cualquier solicitud a la ruta raíz del servidor seran manejada por las rutas definidas en routes.


module.exports = server;
