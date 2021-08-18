import express from 'express'

const app = express()

app.use(express.json())
app.all('/getJSON', (req, res) => {
  res.json({ data: 'data' })
})

app.get('/', (req, res) => {
  res.json({ message: 'API' })
})

module.exports = app
