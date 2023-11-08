const myConnection = require('../database/config')
const utils = require('../resources/utils')
const jwt = require('jsonwebtoken')

const loginForm = (request,response) =>{
    response.render('login')
}

const doLogin =  async (request,response)=>{
     const sql = `select id,email from Usuarios where email = ? and pass = ?`  
     console.log(sql)
     const res =  myConnection.query(sql,
        [
            request.body.email,
            request.body.pass
        ],
        function(err, results) {
            console.log(results)
            console.log(err)
            if(results[0]){
                response.json({message:"Login Exitoso", flag:true})
                user = results[0]
                Object.assign(email, {exp: Math.floor(Date.now() / 1000) + (60*15)})
                token = jwt.sign(
                    email,
                    process.env.ACCESS_TOKEN_SECRET,
                    )
                respuesta = {
                    message:"Login Exitoso",
                    userData : JSON.stringify(results[0]),
                    token
                }
//                response.render('app/dashboard',{locals:respuesta})
            }else{
                respuesta = {
                    message:"Login Fallido",
                    userData : '',
                    token : ''
                }
                response.render('error',{locals:respuesta})
            }
        }
      );
}
module.exports = {
    loginForm,
    doLogin,
}