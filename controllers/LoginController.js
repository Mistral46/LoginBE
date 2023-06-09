const myConnection = require('../database/config')
const pool = require('../database/configpg')
const utils = require('../resources/utils')

const loginForm = (request,response) =>{
    response.render('login')
}

const doLogin =  async (request,response)=>{
     const sql = `select * from users where username = ? and password = ?`  
     console.log(sql)
     const res =  myConnection.query(sql,
        [
            request.body.username,
            request.body.password
        ],
        function(err, results) {
            console.log(results)
            console.log(err)
            if(results[0]){
                // response.json({message:"Login Exitoso", flag:true})
                respuesta = {
                    message:"Login Exitoso",
                    userData : JSON.stringify(results[0]),
                    token : process.env.TOKEN
                }
                response.render('app/dashboard',{locals:respuesta})
            }else{
                respuesta = {
                    message:"Login Fallido",
                    userData : '',
                    token : ''
                }
                response.render('app/error',{locals:respuesta})
            }
        }
      );
}
const doLoginpg = async (request,response) => {

    const res = await pool.query(
        `select * from users where username = ?
         and password = ?`,
         [
            request.body.username,
            request.body.password
         ]
        );
    if(res.id){
        respuesta = {
            message:"Login Exitoso",
            userData : results,
            token : process.env.TOKEN
        }
        response.render('app/dashboard',{locals:respuesta})
    }else{
        respuesta = {
            message:"Login Fallido",
            userData : '',
            token : ''
        }
        response.render('app/error',{locals:respuesta})
    }

}

module.exports = {
    loginForm,
    doLogin,
    doLoginpg
}