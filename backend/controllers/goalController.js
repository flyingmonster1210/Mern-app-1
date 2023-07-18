
const getGoals = (req, res) => {
  res.json({ message: 'get' })
}

const setGoals = (req, res) => {
  console.log(req.body)
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

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