
const getGoals = (req, res) => {
  res.json({ message: 'get goals' })
}

const setGoals = (req, res) => {
  res.json({ message: 'post' })
}

const updateGoals = (req, res) => {
  res.json({ message: `put with id = ${req.params.id}` })
}

const deleteGoals = (req, res) => {
  res.json({ message: `delete with id = ${req.params.id}` })
}

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals
}