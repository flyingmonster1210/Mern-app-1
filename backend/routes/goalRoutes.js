const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.json({ message: 'get' })
})

router.post('/', (req, res) => {
  res.json({ message: 'post' })
})

router.put('/:id', (req, res) => {
  res.json({ message: `put with id = ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
  res.json({ message: `delete with id = ${req.params.id}` })
})

module.exports = router