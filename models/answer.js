let mongoose = require('mongoose')
let Schema = mongoose.Schema

let AnswerSchema = new Schema({
  user: String,
  content: String,
  answerTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  },
  created_at: Date
})

let Answer = mongoose.model("Answer", AnswerSchema)

module.exports = Answer
