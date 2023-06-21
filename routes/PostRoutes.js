
const express = require('express')
const router = express.Router()
const post = require('../controllers/PostController')
const auth = require('../middleware/authMiddleware')

router.post('/addpost',post.formulario)
router.post('/deletepost',post.agregarPersonaMy)


module.exports = router