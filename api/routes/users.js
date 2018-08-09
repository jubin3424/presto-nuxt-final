const { Router } = require('express')
const router = Router()

const users = [
  { user: 'Jubin', contents: '언제 상장되나요?', created_at: '2018-08-07' },
  { user: 'Joobin', contents: '코인이 오를까요??', created_at: '2018-08-06' }
]

router.get('/users', (req, res, next) => {
  res.json(users)
})

router.get('/users/:id', (req, res, next) => {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
