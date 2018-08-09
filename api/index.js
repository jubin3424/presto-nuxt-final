const express = require('express')
const bodyParser = require('body-parser')

// Create express instnace
const app = express()

let mongoose = require('mongoose');

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", (callback) => {
  console.log("Connection Succeed");
})

mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true})

// db.collection.update(
//   { answered: { $exists: false }},
//   { $set: { defaulted: false}},
// )

// Require API routes
const users = require('./routes/users')
const comments = require('./routes/comment')

// Import API Routes
app.use(bodyParser.json())
app.use(users)
app.use(comments)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
