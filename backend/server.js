
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT
const app = express()

const { errorHandler } = require('./middleware/errorMiddleware')
const { requestInfo } = require('./middleware/normalMiddleware')
const connetDB = require('./config/db')

connetDB()

app.listen(port, () => {
  console.log('\n\n-----------------------------------------------------------')
  console.log(`Server is started at port ${port}`)
})

// able to recieve json data from Http request
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// output info of each request
app.use(requestInfo)

// map all request 
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// a middleware to handle error, always make it as the last middleware
app.use(errorHandler)










