const jwt = require("jsonwebtoken")

function verifyToken(req, res, next) {
    const token = req.headers["Authorization"];
  
    console.log("Este es el token recibido:", token);
  
    if (!token) {
      return res.status(401).send("Token no escrito");
    }
  
    // Verifica el token utilizando la clave secreta "1234"
    jwt.verify(token.slice(7), "1234", (err, decoded) => {
      if (err) {
        return res.status(401).send("Token Inválido");
      }
  
      if (!decoded.isAdmin) {
        return res.status(403).send("No tienes permisos");
      }
      req.userId = decoded.userId;
      next();
    });
  }

module.exports = verifyToken