const router = require('express').Router()
// const { router } = require('express')
const conexion = require('./config/conexion')


//----------agregamos rutas-----------
//get usuarios
router.get('/',(req, res)=>{
    let sql = 'SELECT * FROM db_users.persona'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) {throw err;}
        else{
            res.json(rows)
        }
    })

})
// get un usuario
router.get('/:id',(req, res)=>{
    const {id} = req.params
    let sql = 'SELECT * FROM db_users.persona where id_persona = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) {throw err;}
        else{
            res.json(rows)
        }
    })

})
//agregar usuario
router.post('/',(req, res)=>{
    const{nombre, apellidos, celular, correo, direccion} = req.boby

    let sql = `insert into db_users.persona(nombre, apellidos, celular, correo, direccion) values('${nombre}','${apellidos}','${celular}','${correo}','${direccion}')` 
    conexion.query(sql, (err, rows, fields)=>{
        if(err){throw err;}
        else{
            res.json({status: 'persona agregada'})
        }
    })
})

//eliminar
router.delete('/:id',(req, res)=>{
    const{id}=req.params

    let sql = `delete from db_users.persona where id_persona = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) {throw err}
        else{
            res.json({status: 'persona eliminado'})
        }
    })
})

//editar
router.put('/:id',(req, res)=>{
    const{id} = req.params
    const{nombre, apellidos, celular, correo, direccion} = req.body

    let sql = `update db_users.persona
                nombre = '${nombre}',
                apellidos = '${apellidos}',
                celular = '${celular}',
                correo = '${correo}',
                direccion = '${direccion}'
                where id_persona = '${id}'`

    conexion.query(sql, (err, rows, fields)=>{
        if(err){throw err}
        else{
            res.json({status: 'persona editada'})
        }
    })
})
//------------------------------------


module.exports = router;

