const express = require("express")
const router = express.Router()
const {allUsuarios,singleUsuario,createUsuario,editUsuario,eraseUsuario} = require("../controllers/usuarios");
//aqui van mis peticiones http

router.get("/usuarios/",allUsuarios)
router.get("/usuarios/:id_usuario",singleUsuario)
router.post("/usuarios/crearUsuario",createUsuario)
router.put("/usuarios/editarUsuario/:id_usuario",editUsuario)
router.delete("/usuarios/eliminarUsuario/:id_usuario",eraseUsuario)

module.exports= router