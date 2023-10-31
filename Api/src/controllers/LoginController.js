const { Login } = require(".././db")
const jwt = require("jsonwebtoken")

async function crearAdmin(req, res){
    try{
        const { email, password } = req.body
        const user = await Login.create({
            email,
            password,
            isAdmin: true,
        })
        const token = jwt.sign({ userId: user.id, isAdmin: true }, "1234", { expiresIn: "1h" })
        res.json({token})
    } catch(error){
        console.log(error)
        res.status(500).send("Error al crear administrador")
    }
}

module.exports = { crearAdmin }