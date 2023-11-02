const express = require("express")
const { crearAdmin } = require("../controllers/LoginController")
const verifyToken = require("../verifyToken")

const router = express.Router()



router.post("/crear", crearAdmin)
router.get("/admin-panel", verifyToken, (req, res) =>{
    res.send("Panel Administracion")
})

module.exports = router