const myConnection = require('../database/config')
const pool = require('../database/configpg')
const utils = require('../resources/utils')

const loginForm = (request,response) =>{
    response.render('login')
}

const doLogin =  async (request,response)=>{
     const sql = `select * from users where username = "${await utils.validaOpenaiSql(request.body.username)}" and password = "${await utils.validaOpenaiSql(request.body.password)}"`  
     console.log(sql)
     const res =  myConnection.query(sql,
        function(err, results) {
            console.log(results)
            console.log(err)
            if(results[0]){
                response.json({message:"Login Exitoso"})
            }else{
                response.json({message:"Usuario no conocido"})
            }
        }
      );

}
const doLoginpg = async (request,response) => {

    const res = await pool.query(
        `select * from users where username = "${request.body.username}"
         and password = "${request.body.password}"`,
        );
    return(res)

}

module.exports = {
    loginForm,
    doLogin,
    doLoginpg
}