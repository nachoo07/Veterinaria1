const {connection} = require("../config/db")


const allClient=(req,res)=>{
    const query = 'select * from clientes';
    connection.query(query,(err,results)=>{
        if (err) throw err;        
        res.json(results)
    })

}

const singleClient=(req,res)=>{
    console.log(req.params.id);
    const id= req.params.id
    const query = 'select * from clientes where id_cliente=' + id;
    connection.query(query,(err,results)=>{
        if (err) throw err;        
        res.send(results)
    })
}

const createClient =(req,res)=>{
const {nom_ap,direccion, email, telefono} = req.body

const query = `insert into clientes(nom_ap,direccion, email, telefono) values ('${nom_ap}','${direccion}','${email}','${telefono}')`
connection.query(query,(err,results)=>{
    if (err) throw err;        
        res.send(results)
})
}


const editClient=(req,res)=>{

const id=req.params.id
const {nom_ap,direccion, email, telefono} = req.body

const query = `update clientes set nom_ap='${nom_ap}', direccion='${direccion}',email='${email}', telefono= '${telefono}'where id_cliente=${id}`
connection.query(query,(err,results)=>{
    if (err) throw err;        
        res.send(results)
})
}

const eraseClient = (req, res) => {
    const id = req.params.id
    const query = "delete from clientes where id_cliente=" + id
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.send(results)
    })
}



module.exports={allClient,singleClient,createClient,editClient,eraseClient}