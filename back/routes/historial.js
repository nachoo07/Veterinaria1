const express = require("express")
const router = express.Router()
const { allHistorial, singleHistorial, createHistorial, editHistorial, eraseHistorial } = require("../controllers/historial")


router.get("/historial_med", allHistorial)
router.get("/historial_med/:id", singleHistorial)
router.post("/historial_med/create", createHistorial)
router.put("/historial_med/editar/:id", editHistorial)
router.delete("/historial_med/eliminar/:id", eraseHistorial)



module.exports = router