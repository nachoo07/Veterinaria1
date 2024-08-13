const express = require("express")

const router = express.Router()

const { allClient, singleClient, createClient, editClient, eraseClient } = require("../controllers/clientes")

router.get("/clientes", allClient)
router.get("/clientes/:id", singleClient)
router.post("/clientes/create", createClient)
router.put("/clientes/editar/:id", editClient)
router.delete("/clientes/eliminar/:id", eraseClient)


module.exports = router