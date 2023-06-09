const express = require('express')
const router = express.Router()
const persona = require('../controllers/PersonaController')

router.get('/addpersona',persona.formulario)
router.post('/agregarPersonaMy',persona.agregarPersonaMy)
router.post('/agregarPersonaPg',persona.agregarPersonaPg)
router.post('/allusers',persona.allUsers)

module.exports = router
