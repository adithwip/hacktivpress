var Article = require('../models/article')
var User = require('../models/user')

let find = (req, res) => {
    Article.find({})
        .populate('author')
        .exec(function(err, articles) {
            res.send(err ? err : articles)
        })
}

let findOne = (req, res) => {
    Article.findById(req.params.id)
        .populate('author')
        .exec(function(err, article) {
            res.send(err ? err : article)
        })
}

let create = (req, res) => {
    var newArticle = new Article({
        title: req.body.title,
        articleContent: req.body.articleContent,
        category: req.body.category,
        author: req.body.author,
        createdAt: new Date()
    })
    newArticle.save((err, article) => {
        res.send(err ? err : article)
    })
}

let update = (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        if (err) {
            res.send(err)
        } else {
            if (article.author == req.body.creator) {
                article.title = req.body.title || article.title
                article.articleContent = req.body.articleContent || article.articleContent
                article.category = req.body.category || article.category
                article.updatedAt = new Date()

                article.save((err, article) => {
                    res.send(err ? err : article)
                })
            } else {
                res.send({ msg: 'Not authorized' })
            }
        }
    })
}

let remove = (req, res) => {
    Article.findOneAndRemove({ _id: req.params.id }, (err, article) => {
        if (err) {
            res.send(err)
        } else {
            res.send(article)
        }
    })
}



module.exports = {
    find,
    findOne,
    create,
    update,
    remove
}