
const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc    Show all the goals
// @route   get /api/uses
// @access  public
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()
  res.json(goals)
})

// @desc    Add a new goal 
// @route   POST /api/uses
// @access  public
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

// @desc    Update the goal info
// @route   put /api/uses
// @access  public
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

// @desc    Delete a goal
// @route   delete /api/uses
// @access  public
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