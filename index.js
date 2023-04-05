const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
const cors = require('cors')
app.use(cors())
app.get('/test',(request,response)=>{
    response.send('testeando')
})

app.listen(3000,()=>{
    console.log('Escuchando en el puerto 3000')
})