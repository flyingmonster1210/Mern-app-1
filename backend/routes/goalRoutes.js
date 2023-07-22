const express = require('express')
const router = express.Router()
const { getGoals, updateGoals, setGoals, deleteGoals } = require('../controllers/goalController')

// mapping '/api/goals'
router.route('/').get(getGoals).post(setGoals)
// e.g '/api/goals/123'
router.route('/:id').delete(deleteGoals).put(updateGoals)

module.exports = router