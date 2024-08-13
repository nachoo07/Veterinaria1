const { connection }= require("../config/db")

const login=(request,response)=>{
    const { usuario, password } = request.body;
    const query=`
        SELECT * from usuarios
        WHERE nombre = '${usuario}'
    `
    connection.query(query,(error, data)=>{
        if(data && data.length > 0){
            if(data[0].contrasena===password){
                response.sendStatus(200)
            }
            else{
                response.sendStatus(400)
            }
        }
        else{
            response.sendStatus(400)
        }
    })
}
module.exports = {login}