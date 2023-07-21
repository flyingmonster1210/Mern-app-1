const mongoose = require('mongoose')

const connetDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB conected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connetDB





