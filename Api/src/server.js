const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require('./routes/index')

const server = express();

// Middlewares = Filtros (Se ejecutan en el orden que los declaras)

server.use(cors()); //Permite que cualquier cliente se conecte 

server.use(morgan("dev")); //Registra request en la terminal (Tambien muestra errores)

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

server.use(express.json()); //Funcion de parseo

server.use(router); //Ruta principal cuando inicia el servidor 

module.exports = server;
