
const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()
  res.json(goals)
})

const setGoals = asyncHandler(async (req, res) => {
  console.log(req.body)
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const goals = await Goal.create({
    text: req.body.text,
  })

  res.json(goals)
})

const updateGoals = asyncHandler(async (req, res) => {
  res.json({ text: `put with id = ${req.params.id}` })
})

const deleteGoals = asyncHandler(async (req, res) => {
  res.json({ text: `delete with id = ${req.params.id}` })
})

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals
}