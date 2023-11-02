const { Login } = require(".././db")
const jwt = require("jsonwebtoken")

async function crearAdmin(req, res){
    // console.log('req', JSON.stringify(req.body));
    
    try{
        const { email, password } = req.body
        const user = await Login.create({
            email,
            password,
            isAdmin: true,
        })
        const token = jwt.sign({ userId: user.id, isAdmin: true }, "1234", { expiresIn: "1h" })
        res.json({token, response: 'success'})
    } catch(error){
        console.log(error)
        res.status(500).send("Error al crear administrador " + error)
    }
}

module.exports = { crearAdmin }