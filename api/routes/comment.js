const { Router } = require('express')
const router = Router()

let Comment = require('../../models/comment')
let Answer = require('../../models/answer')

router.get('/comments', (req, res) => {
  Comment.find({}, 'user content created_at answered',
    (error, comments) => {
      if (error) {
        console.error(error)
      }
      res.send({
        comments: comments
      })
  }).sort({_id: -1})
})

router.get('/comments/answer', (req, res) => {
  Answer.find({}, 'user content answerTo created_at',
    (error, answer) => {
    if (error) {
      console.error(error)
    }
    res.send({
      answer: answer
    })
    })
})

router.get('/comments/:id', (req, res) => {
  let db = req.db
  Comment.findById(req.params.id, 'user content created_at',
    (error, comments) => {
      if (error) {
        console.error(error)
      }
      res.send(comments)
    })
})

router.post('/comments/new', (req, res) => {
  let db = req.db
  let currentDate = new Date()
  let user = req.body.user
  let new_comment = new Comment({
    user: user,
    content: req.body.content,
    created_at: currentDate,
  })

  new_comment.save((error) => {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Comment saved Successfully'
    })
  })
})

router.post('/comments/answer/:id', (req, res) => {
  let db = req.db
  let currentDate = new Date()
  let user = req.body.user
  let new_answer = new Answer({
    user: user,
    content: req.body.content,
    answerTo: req.params.id,
    created_at: currentDate
  })

  new_answer.save((error) => {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: '답변이 성공적으로 등록되었습니다'
    })
  })

})

router.put('/answered/:id', (req, res) => {
  Comment.findById(req.params.id, 'answered', (error, comment) => {
    if (error) { console.log(error)}
    comment.answered = true
    comment.save((error) => {
      if (error) {console.log(error)}
      res.send({
        success: true,
        message: 'Answer registered'
      })
    })
  })
})

router.put('/unanswered/:id', (req, res) => {
  Comment.findById(req.params.id, 'answered', (error, comment) => {
    if (error) { console.log(error)}
    comment.answered = false
    comment.save((error) => {
      if (error) {console.log(error)}
      res.send({
        success: true,
        message: 'Answer deleted'
      })
    })
  })
})

router.delete('/comments/delete/:id', (req, res) => {
  let db = req.db
  Comment.remove({
    _id: req.params.id
  }, (error, comment) => {
    if (error)
      res.send(error)
    res.send({
      success: true,
      message: '삭제하였습니다.'
    })
  })
})

router.delete('/comments/answer/delete/:id', (req, res) => {
  let db = req.db
  Answer.remove({
    answerTo: req.params.id
  }, (error, comment) => {
    if (error)
      res.send(error)
    res.send({
      success: true,
      message: '삭제하였습니다.'
    })
  })
})
module.exports = router
