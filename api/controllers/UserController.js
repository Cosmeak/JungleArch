const { Router } = require('express')
const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre', email: 'alexandre@test.fr' },
  { name: 'Pooya' },
  { name: 'Sébastien', email: 'seb@test.fr' }
]

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users)
})

module.exports = router
