const {Schema, model, Types} = require('mongoose')

const articleSchema = new Schema({
    author: String,
    title: String,
    content: String,
// type - an array with comment ids 
    comments: {type:[ Types.ObjectId], ref: 'Comment', default: []}
})

const Article = model('Article', articleSchema)

module.exports = Article