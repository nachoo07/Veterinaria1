const { response } = require("express")
const { connection } = require("../config/db")

const allMascotas = (request, response) => {
    const query =`SELECT * FROM mascotas`
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

const singleMascota=(request,response)=>{
    const id_mascota=request.params.id_mascota
    const query = `SELECT * FROM mascotas WHERE id_mascota='${id_mascota}' `
    connection.query(query, (error, data, fields) => {
        if (error || data.length < 1) {
            console.log(error)
            response.sendStatus(400)
        }
        else {
            response.send(data[0])
        }

    })
}
const createMascota = (request, response) => {
    const {	nom_mascota,especie,raza,fecha_nacimiento,id_cliente}= request.body
    const query =`INSERT INTO mascotas (nom_mascota,especie,raza,fecha_nacimiento,id_cliente)VALUES('${nom_mascota}','${especie}','${raza}','${fecha_nacimiento}',${id_cliente})`
    console.log(query)
    connection.query(query, (error, results) => {
        if (error) throw error;
        response.send(results);
    })
}
const editMascota = (request, response) => {
const id_mascota= request.params.id_mascota 
const {	nom_mascota,especie,raza,fecha_nacimiento,id_cliente}= request.body
const query =`UPDATE mascotas SET nom_mascota = '${nom_mascota}', especie = '${especie}', raza = '${raza}',  fecha_nacimiento= '${fecha_nacimiento}' WHERE id_mascota= '${id_mascota}'`;
connection.query(query,(error,results)=>{
    if (error) throw error;
    response.send(results);
})
}


const eraseMascota = (request, response) => {
const id_mascota=request.params.id_mascota
const query =`DELETE FROM mascotas WHERE id_mascota =${id_mascota}`
connection.query(query,(error,results)=>{
    if (error) throw error;
    response.send(results);
})
}

module.exports = { allMascotas,singleMascota,createMascota,editMascota,eraseMascota}