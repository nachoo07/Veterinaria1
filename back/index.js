const express = require("express")
const {connection} = require("./config/db")

const productos = require("./routes/productos")
const internaciones = require("./routes/internaciones")
const mascotas =require("./routes/mascotas")
const clientes = require("./routes/clientes")
const historial = require("./routes/historial")
const morgan = require("morgan")
const cors = require('cors')
const usuariosRouter=require('./routes/usuarios')
const loginRouter=require('./routes/login')
const app = express();

const port = 3000;
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use("/", productos)
app.use("/", internaciones)
app.use(mascotas)
app.use("/", clientes)
app.use("/", historial)
app.use(usuariosRouter)
app.use(loginRouter)


connection.connect(()=>{
    console.log("conectado a mi DB")
})

app.get("/", (req, res)=>{
    console.log("bienvenidos a mi api")
    res.send({message:"welcome to my api"})
})

app.listen(port, ()=>{
    console.log("escuchando en el puerto " + port)
})