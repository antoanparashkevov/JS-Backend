const {Schema, model} = require('mongoose')


const commentSchema = new Schema({
    author: String,
    content: String
})

const Comment = model('Comment',commentSchema)

module.exports = Comment;