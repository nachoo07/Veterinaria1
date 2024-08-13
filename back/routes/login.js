const express = require("express")
const { login } = require("../controllers/login")
const router = express.Router()

//aqui van mis peticiones http
router.post("/login/",login)

module.exports = router