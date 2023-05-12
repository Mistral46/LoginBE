const express = require('express')
const router = express.Router()
const main = require('../controllers/MainController')
const persona = require('../controllers/PersonaController')

router.get('/test',main.test)
router.post('/postData',main.postData)
router.get('/index',main.index)
router.post('/enviarDatos',main.enviarDatos)
router.get('/ejercicio',main.ejercicio)
router.get('/ejercicio',main.ejercicio)
router.post('/recibeDataEjercicio',main.recibeDataEjercicio)
///// PARA PERSONAS
router.get('/addpersona',persona.formulario)
router.post('/agregarPersonaMy',persona.agregarPersonaMy)
router.post('/agregarPersonaPg',persona.agregarPersonaPg)


module.exports = router