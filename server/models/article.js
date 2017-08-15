const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    articleContent: {
        type: String,
        required: true
    },
    category: [String],
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: Date,
    updatedAt: Date
})

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;