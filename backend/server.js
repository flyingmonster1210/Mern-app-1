
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

const app = express()

app.listen(port, () => {
  console.log('\n\n-----------------------------------------------------------')
  console.log(`Server is started at port ${port}\n`)
})

app.use((req, res, next) => {
  console.log('* ' + (new Date()).toString())
  console.log(`  Request method: ${req.method}`)
  next()
})

app.use('/api/goals', require('./routes/goalRoutes'))












