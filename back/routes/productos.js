const express = require("express")

const router = express.Router()

const {GetAllProduct, GetProductById ,CreateProduct, DeleteProduct, UpdateProduct, GetSeeker} = require("../controllers/productos")

router.get("/productos", GetAllProduct)
router.get("/productos/:id", GetProductById)
router.post("/productos/create", CreateProduct)
router.delete("/productos/delete/:id", DeleteProduct)
router.put("/productos/update/:id", UpdateProduct)
router.get("/productos/seeker/:categoria", GetSeeker)



module.exports = router