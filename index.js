const express = require('express')

const app = express()

const PORT = process.env.PORT || 8085

const routerProductos = require ('./routes/productos')

app.use(express.json())

app.use('/api/productos', routerProductos)

app.listen(PORT,()=>{
  console.log('escuchando servidor')
})
