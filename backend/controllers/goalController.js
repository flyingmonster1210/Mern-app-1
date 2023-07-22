
const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()
  res.json(goals)
})

const setGoals = asyncHandler(async (req, res) => {
  // console.log(req.body)
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
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  // {new: true} means create it when it doesn't exist
  const updateGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.json(updateGoal)
})

const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const deleteGoal = await Goal.findByIdAndRemove(req.params.id)

  res.json({ id: req.params.id })
})

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals
}