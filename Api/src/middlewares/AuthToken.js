require('dotenv').config();
const jwt = require("jsonwebtoken");

module.exports = function(req, res, next){
    if(req.path != '/login'){
        console.log(req.headers.authorization);
        // if(req.headers.authorization){
            // let token = req.headers.authorization.split(' ')[1];
            let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2FicmllbCIsImVtYWlsIjoiY2hpcGlhemN1cnJhMjAxNUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTk0NjM4NTAsImV4cCI6MTY5OTQ2NzQ1MH0.HFmXjL7cEcpJdWlLKRcPnA_S6LhPESUygSTD4w8nWnA"
            jwt.verify(token,process.env.SECRET_TOKEN, function(error, decoded){
                if(error) return res.status(403).send({message:"No tienes los permisos suficientes para estar aquí", error});
                if(req.method != 'GET'){
                    if(decoded.role == 'admin') next();
                    else res.status(403).send({message:"No tienes los permisos suficientes para estar aquí", error});
                }else{
                    next();
                }
           
            })
        // }
        // else res.status(403).send({message: "No tienes los permisos para realizar esta acción"})
    } else next();
}