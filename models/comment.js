let mongoose = require('mongoose')
let Schema = mongoose.Schema


var CommentSchema = new Schema({
  user: String,
  content: String,
  created_at: Date,
  answered: {
    type: Boolean,
    default: false
  }
})

var Comment = mongoose.model("Comment", CommentSchema)

module.exports = Comment
