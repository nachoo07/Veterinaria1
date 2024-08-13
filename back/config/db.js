const mysql = require("mysql2")
const dotenv = require("dotenv")
dotenv.config();

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345678',
    database : 'veterinaria_bd'
});

module.exports={connection};