let mongoose = require('mongoose')
let Schema = mongoose.Schema

var CommentSchema = new Schema({
  user: String,
  content: String,
  created_at: Date
})

var Comment = mongoose.model("Comment", CommentSchema)

module.exports = Comment
