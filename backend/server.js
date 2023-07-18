
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT
const app = express()

const { errorHandler } = require('./middleware/errorMiddleware')
const { requestInfo } = require('./middleware/normalMiddleware')

app.listen(port, () => {
  console.log('\n\n-----------------------------------------------------------')
  console.log(`Server is started at port ${port}\n`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(requestInfo)

app.use('/api/goals', require('./routes/goalRoutes'))


app.use(errorHandler)










