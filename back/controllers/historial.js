const {connection} = require("../config/db")



const allHistorial=(req,res)=>{
    const query = `select * from historial_med`;
    connection.query(query,(err,results)=>{
        if (err) throw err;        
        res.json(results)
    })

}

const singleHistorial=(req,res)=>{
    console.log(req.params.id);
    /*const id = req.params.id
    const query = `select * from historial_med where id_HistorialMed=` + id;
    connection.query(query,(err,results)=>{
        if (err) throw err;        
        res.send(results)
    })*/
        const id = req.params.id;
        const query = 'SELECT * FROM historial_med WHERE id_HistorialMed = ?';
    
        connection.execute(query, [id], (err, results) => {
            if (err) {
                console.error('Error en la consulta SQL:', err);
                res.status(500).send('Error en la consulta SQL');
                return;
            }
            res.send(results);
        });

}

const createHistorial =(req,res)=>{
const {NomYape_cliente,enfermedades, alergias , medicinas,dosis} = req.body

const query = `insert into historial_med(NomYape_cliente,enfermedades, alergias , medicinas,dosis) values ('${NomYape_cliente}','${enfermedades}','${alergias }','${medicinas}','${dosis}')`
connection.query(query,(err,results)=>{
    if (err) throw err;        
        res.send(results)
})
}


const editHistorial=(req,res)=>{

const id=req.params.id
const {NomYape_cliente,enfermedades, alergias , medicinas,dosis} = req.body

const query = `update historial_med set NomYape_cliente='${NomYape_cliente}' , enfermedades='${enfermedades}', alergias='${alergias}', medicinas='${medicinas}' , dosis='${dosis}' where id_HistorialMed=${id}`
connection.query(query,(err,results)=>{
    if (err) throw err;        
        res.send(results)
})
}

const eraseHistorial = (req, res) => {
    const id = req.params.id
    const query = `delete from historial_med where id_HistorialMed=` + id
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.send(results)
    })
}

module.exports={allHistorial,singleHistorial,createHistorial,editHistorial,eraseHistorial}