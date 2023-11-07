const express = require("express")
const {login} = require("../controllers/LoginController")
const verifyToken = require("../verifyToken")

const router = express.Router()

router.post("/", login)
router.get("/admin-panel", verifyToken, (req, res) =>{
    res.send("Panel Administracion")
})

module.exports = router