const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  return res.json({ message: PORT })
})

app.listen(PORT, () => {
  console.log('Working')
})
