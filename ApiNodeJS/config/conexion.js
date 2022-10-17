const mysql = require('mysql2');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'1234',
    port: 3306,
    database: 'db_users'
});

conexion.connect((err)=>{
     if(err){
        console.log('ha ocurrido error hahahaha: ' +err)
     }
     else{
        console.log('conexion exitosa')
     }
});

module.exports = conexion;