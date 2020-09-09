const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const data = 'Hello World!'
  res.send({ data })
})

app.post('/', (req, res) => {
  const data = 'Hello World! post'
  res.send({ data })
})

app.delete('/', (req, res) => {
  const data = 'Hello World! delete'
  res.send({ data })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
