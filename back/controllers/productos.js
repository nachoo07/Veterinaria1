const {connection} = require("../config/db")
const {response} = require("express")

const GetAllProduct = (req, res)=>{

    const query = `select * from productos`;

    connection.query(query, (err, results)=>{
        if (err) throw err;
        res.json(results)
    })
}

const GetProductById = (req, res)=>{

    const id =req.params.id
    const query = `select * from productos where id=${id}`
    connection.query(query,(err,results)=>{
        if (err) throw err;
        res.send(results)
    })
}

const CreateProduct = (req, response) => {
    
    const {categoria ,stock ,nombre ,precio ,descripcion} = req.body
    
    console.log(req.body, "error");
  
    const query = `INSERT INTO productos (categoria, stock, nombre, precio, descripcion )
    VALUES ('${categoria}',${stock},'${nombre}', '${precio}', '${descripcion}')`
    
    
    console.log(query)

    connection.query(query,(error,results)=>{
        if (error) throw error;
        response.send(results)
    })
}

const DeleteProduct = (req, res)=>{
    const id = req.params.id
    const query = `delete from productos where id=${id}`
    connection.query(query,(err,results)=>{
        if (err) throw err;
        res.send(results)
    })
}

const UpdateProduct = (req, res)=>{
    const id= req.params.id
    const {categoria ,stock ,nombre ,precio ,descripcion} = req.body
    const query = `update productos set categoria='${categoria}',stock=${stock}, nombre='${nombre}', precio='${precio}', descripcion='${descripcion}' where id=${id}`
    connection.query(query, (err, results)=>{
        if (err) throw err;
        res.send(results)
    }

)
    

}

const GetSeeker = (req, res) => {
    const categoria =req.params.categoria
    // Validación de parámetros
    if (!categoria) {
        return res.status(400).send({ error: "La categoría es requerida" });
    }

    // Consulta parametrizada para evitar inyección SQL
    const query = `SELECT * FROM productos WHERE categoria = ?`;

    connection.query(query, [categoria], (err, results) => {
        if (err) {
            console.error("Error al obtener los productos por categoría:", err);
            return res.status(500).send({ error: "Hubo un error al obtener los productos. Por favor, intenta nuevamente." });
        }
        res.send(results);
    });
    /*const query = `select * from productos where categoria=${categoria}`
    connection.query(query,(err,results)=>{
        if (err) throw err;
        res.send(results)
    })*/

}




module.exports = {GetAllProduct, GetProductById, CreateProduct, DeleteProduct, UpdateProduct, GetSeeker}