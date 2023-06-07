const express = require('express')
const router = express.Router()
const LoginRouter = require('./LoginRoutes')
const MainRouter = require('./MainRoutes')
const PersonaRouter = require('./PersonaRoutes')


router.use('/login',LoginRouter)
router.use('/main',MainRouter)
router.use('/persona',PersonaRouter)

module.exports = router