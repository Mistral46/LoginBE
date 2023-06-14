

const authenticate =(request, response, next) => {
    if (request.body.token !== process.env.TOKEN){
        console.log("Credenciales erroneas")
    }else{
        console.log('Credenciales Correctas!!')
        next();
    }
};

module.exports = {authenticate}