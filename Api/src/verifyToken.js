const jwt = require("jsonwebtoken")

function verifyToken(req,res, next){
    const token = req.headers["authorization"]

    if(!token) {
        return res.status(401).send("Token no escrito")
    }

    jwt.verify(token, "1234", (err, decoded) => {
        if(err){
            return res.status(401).send("Token Invalido")
        }

        if(!decoded.isAdmin){
    return res.status(403).send("No  tienes permisos")
}
    req.userId = decoded.userId
    next()
})
}

module.exports = verifyToken