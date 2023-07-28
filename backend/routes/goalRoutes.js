const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const { getGoals, updateGoals, setGoals, deleteGoals } = require('../controllers/goalController')

// mapping '/api/goals'
router.route('/').get(protect, getGoals).post(protect, setGoals)
// e.g '/api/goals/123'
router.route('/:id').delete(protect, deleteGoals).put(protect, updateGoals)

module.exports = router