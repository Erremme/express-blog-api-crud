const express = require('express')
const app = express()
const port = 3000
const productsRouter = require('./routers/productsRouter')

//registro il body-parser per "application/json"
app.use(express.json());

//Middleware per asset statici
app.use(express.static('public'))

//rotta ('/')
app.get('/', (req, res) => {
  res.send('Server del mio blog!')
})

//Importo il prefisso delle rotte e le rotte
app.use("/prodotti", productsRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      