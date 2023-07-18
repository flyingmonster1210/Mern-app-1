
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

const app = express()

app.listen(port, () => {
  console.log('\n\n-----------------------------------------------------------')
  console.log(`Server is started at port ${port}`)
  console.log((new Date()).toString())
})

app.use('/api/goals', require('./routes/goalRoutes'))












