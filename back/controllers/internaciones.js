const {connection} = require("../config/db");



const GetAllInternment = (req, res) =>{
    const query = `select * from internaciones`

    connection.query(query, (err, results) =>{
        if (err) throw err;
        res.json(results)
    })
}

const GetInternmentById = (req, res) =>{
    const id= req.params.id
    const query = `select * from internaciones where id=${id}`
    connection.query(query, (err,results) =>{
        if (err) throw err;
        res.send(results)
    })
}

const CreateInternment = (req, res) =>{
    const {fecha_internacion, nomyape_cliente,descripcion_internacion} = req.body

    const query = `insert into internaciones (fecha_internacion, nomyape_cliente, descripcion_internacion)
    VALUES ('${fecha_internacion}','${nomyape_cliente}','${descripcion_internacion}')`

    connection.query(query, (err,results) =>{
        if (err) throw err;
        res.send(results)
    })
}

const DeleteInternment = (req, res) =>{
    const id = req.params.id
    const query = `delete from internaciones where id=${id}`
    connection.query(query, (err, results)=>{
        if (err) throw err;
        res.send(results)
    })
}

const UpdateInternment = (req, res) =>{
    const id = req.params.id
    const {fecha_internacion, nomyape_cliente,descripcion_internacion} = req.body
    const query = `update internaciones set fecha_internacion='${fecha_internacion}',nomyape_cliente='${nomyape_cliente}', descripcion_internacion='${descripcion_internacion}' where id=${id}`
    connection.query(query, (err, results) =>{
        if (err) throw err;
        res.send(results)
    })
}


module.exports = {GetAllInternment, GetInternmentById, CreateInternment, DeleteInternment, UpdateInternment}