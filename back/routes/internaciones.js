const express = require("express")

const router = express.Router()

const {GetAllInternment, GetInternmentById, CreateInternment,DeleteInternment, UpdateInternment} = require("../controllers/internaciones")

router.get("/internaciones", GetAllInternment)
router.get("/internaciones/:id", GetInternmentById)
router.post("/internaciones/create", CreateInternment)
router.delete("/internaciones/delete/:id", DeleteInternment)
router.put("/internaciones/update/:id", UpdateInternment)

module.exports = router
