const KJUR = require("jsrsasign");

function verifyToken(req, res, next) {
    const userHeader = req.headers["authorization"]; // "Bearer JWT"
    if (typeof userHeader !== undefined) {
        const authString = userHeader.split(" "); // ["BEARER", "JWT"]
        const token = authString[1];

        if (!token) {
            return res.status(401).send("Token no escrito");
        }


        try {
            const publicKey = "1234"; // Reemplaza con tu clave pública
            const isValid = KJUR.jws.JWS.verifyJWT(token, publicKey, {
                alg: ["HS256"], // El algoritmo de firma utilizado
            });

            if (isValid) {
                const payload = KJUR.jws.JWS.readSafeJSONString(
                    KJUR.b64utoutf8(token.split(".")[1])
                );
                if (payload && payload.isAdmin) {
                    req.userId = payload.userId;
                    next();
                } else {
                    res.status(202).send("No tienes permisos");
                }
            } else {
                res.status(401).send("Token Invalido");
            }
        } catch (err) {
            res.status(401).send("Error al verificar el token");
        }
    }
}

module.exports = verifyToken;