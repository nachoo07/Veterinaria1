const { response } = require("express")

const express = require("express")
const router = express.Router()

const {allMascotas,singleMascota,createMascota,editMascota,eraseMascota} = require("../controllers/mascotas");
//aqui van mis peticiones http
router.get("/mascotas/",allMascotas)
router.get("/mascotas/:id_mascota",singleMascota)
router.post("/mascotas/crearMascota",createMascota)
router.put("/mascotas/editarMascota/:id_mascota",editMascota)
router.delete("/mascotas/eliminarMascota/:id_mascota",eraseMascota)
module.exports=router