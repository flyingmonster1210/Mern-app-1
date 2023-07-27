const mongoose = require('mongoose')

// create a schema (a model)
const goalSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  text: {
    type: String,
    require: [true, 'Please add a text value']
  }
}, {
  timestamps: true
})

// a model's collection connect to the db, 
// by this we can perform read, update, delete, create 
module.exports = mongoose.model('Goal', goalSchema)











