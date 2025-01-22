const express = require('express')
const app = express()
const port = 3000
const productsRouter = require('./routers/productsRouter')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Server del mio blog!')
})

app.use("/prodotti", productsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      