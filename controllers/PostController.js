const myConnection = require('../database/config')


const addPost = () =>{
    myConnection.query(
        `insert into post(id,id_user,titulo,contenido) 
        values (?,?,?,?) `,
        [
            request.body.id,
            request.body.id_user,
            request.body.titulo,
            request.body.contenido,
        ],
        function(err, results) {
           if(err){
            response.render('post/error',{locals:err})
           }else{
            data = {
                ...request.body
            }
            response.render('post/recibeDatos',{locals:data})
           } 
        }
      );
}
const deletePost = (request,response) =>{
    myConnection.query(
        `delete from post where id = ? `,
        [
            request.body._id,
        ],
        function(err, results) {
           if(err){
            response.render('post/error',{locals:err})
           }else{
            respuesta = {
                message:"Post eliminado",
                ...request.body
                
            }
            response.json(respuesta)
           } 
        }
      );
}


module.exports = {
    addPost,
    deletePost
}