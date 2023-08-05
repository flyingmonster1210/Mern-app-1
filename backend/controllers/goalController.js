
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Goal = require('../models/goalModel')

// @desc    Show all the goals
// @route   GET /api/uses
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id })
  res.json(goals)
})

// @desc    Add a new goal 
// @route   POST /api/uses
// @access  Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const goals = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.json(goals)
})

// @desc    Update the goal info
// @route   PUT /api/uses
// @access  Private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const user = req.user
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  if (goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  // {new: true} means create it when it doesn't exist
  const updateGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.json(updateGoal)
})

// @desc    Delete a goal
// @route   DELETE /api/uses
// @access  Private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const user = req.user
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  if (goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
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