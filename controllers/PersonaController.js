const myConnection = require('../database/config')
const pool = require('../database/configpg')

const agregarPersonaMy =  (request,response) =>{
    myConnection.query(
        `insert into persona(nombre,apellido,direccion) values (?,?,?) returning id,nombre,apellido,direccion`,
        [
            request.body.nombre,
            request.body.apellido,
            request.body.direccion
        ],
        function(err, results) {
          console.log(results);
          console.log(err);
        }
      );
}
const agregarPersonaPg = async (request,response) => {

    const res = await pool.query(
        `insert into persona(nombre,apellido,direccion)
        values (?1,?2,?3) returning (id,nombre,apellido,direccion)`,
        [
            request.body.nombre,
            request.body.apellido,
            request.body.direccion
        ]
        );
    console.log(res)

}

const formulario = (request,response) =>{
    response.render('persona/addpersona')
}

module.exports = {
    agregarPersonaMy,
    agregarPersonaPg,
    formulario,
}