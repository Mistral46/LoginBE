const myConnection = require('../database/config')
const pool = require('../database/configpg')

const agregarPersonaMy =  (request,response) =>{
    if (request.body.token !== process.env.TOKEN){
        error = {
            message:"Usuario no autenticado"
        }
        response.render('persona/error',{locals:error})
    }

    myConnection.query(
        `insert into persona(nombre,apellido,direccion) 
        values (?,?,?) `,
        [
            request.body.nombre,
            request.body.apellido,
            request.body.direccion
        ],
        function(err, results) {
           if(err){
            response.render('persona/error',{locals:err})
           }else{
            data = {
                nombre:request.body.nombre,
                apellido:request.body.apellido,
                direccion:request.body.direccion
            }
            response.render('persona/recibeDatos',{locals:data})
           } 
        }
      );

}
const agregarPersonaPg = async (request,response) => {
    try{
        const res = await pool.query(
            `insert into persona(nombre,apellido,direccion)
            values (?1,?2,?3) returning (id,nombre,apellido,direccion)`,
            [
                request.body.nombre,
                request.body.apellido,
                request.body.direccion
            ]
            );
            data = {
                nombre:request.body.nombre,
                apellido:request.body.apellido,
                direccion:request.body.direccion
            }
            response.render('persona/recibeDatos',{locals:data})
    }catch(e){
        response.render('persona/error',{locals:e})
    }
    

}

const formulario = (request,response) =>{
    response.render('persona/addpersona')
}
const allUsers = async (request,response) =>{
    if (request.body.token !== process.env.TOKEN){
        error = {
            message:"Usuario no autenticado"
        }
        response.render('persona/error',{locals:error})
    }

    myConnection.query(
        `select id, username from users `,
        function(err, results) {
           if(err){
            response.render('persona/error',{locals:err})
           }else{
            data = {
                message:"Consulta exitosa",
                users : results
            }
            response.render('app/users',{locals:data})
           } 
        }
      );

}


module.exports = {
    agregarPersonaMy,
    agregarPersonaPg,
    formulario,
    allUsers
}