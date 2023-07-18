
const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res) => {
  res.json({ message: 'get' })
})

const setGoals = asyncHandler(async (req, res) => {
  console.log(req.body)
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  res.json({ message: 'post' })
})

const updateGoals = asyncHandler(async (req, res) => {
  res.json({ message: `put with id = ${req.params.id}` })
})

const deleteGoals = asyncHandler(async (req, res) => {
  res.json({ message: `delete with id = ${req.params.id}` })
})

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals
}