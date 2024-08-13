const { connection } = require("../config/db")

const allUsuarios = (request, response) => {
    const query = `SELECT * FROM usuarios `

    connection.query(query, (error, data) => {
        if (error) {
            console.log(error)
            response.sendStatus(400)
        }
        else {
            response.send(data)
        }

    })
}

const singleUsuario = (request,response) => {
    console.log(request.params)
    const id_usuario=request.params.id_usuario
    const query = `SELECT * FROM usuarios WHERE id_usuario=${id_usuario}`
    console.log(query)
    connection.query(query, (error, data) => {
        if (error || data.length < 1) {
            console.log(error)
            response.sendStatus(400)
        }
        else {
            response.send(data[0])
        }

    })
}
const createUsuario = (request, response) => {
    const { nombre,contrasena,rol,email} = request.body
    const query = `INSERT INTO usuarios (nombre,contrasena,rol,email) VALUES('${nombre}','${contrasena}','${rol}','${email}')`
    console.log(query)
    connection.query(query, (error, results) => {
        if (error) throw error;
        response.send(results);
    })
}
const editUsuario = (request, response) => {
    const id_usuario = request.params.id_usuario 
    const { nombre,contrasena,rol,email } = request.body
    const query = `UPDATE usuarios SET nombre = '${nombre}', contrasena = '${contrasena}', rol = '${rol}', email= '${email}' WHERE id_usuario = ${id_usuario}`;
    connection.query(query,(error,results)=>{
    if (error) throw error;
    response.send(results);
})
}


const eraseUsuario = (request, response) => {
const id_usuario=request.params.id_usuario
const query = `DELETE FROM usuarios WHERE id_usuario = ${id_usuario}`
connection.query(query,(error,results)=>{
    if (error) throw error;
    response.send(results);
})
}

module.exports = { allUsuarios,singleUsuario,createUsuario,editUsuario,eraseUsuario }