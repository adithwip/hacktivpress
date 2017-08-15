var express = require('express')
var router = express.Router()

var usercont = require('../controllers/usercont')
var articlecont = require('../controllers/articlecont')

router.post('/signup', usercont.signup)
router.post('/login', usercont.login)
router.post('/userdata', usercont.userData)

router.get('/api/articles', articlecont.find)
router.get('/api/articles/:id', articlecont.findOne)
router.post('/api/articles', articlecont.create)
router.put('/api/articles/:id', articlecont.update)
router.delete('/api/articles/:id', articlecont.remove)

module.exports = router;



// router.post('/api/articles', usercont.userInfo, articlecont.create)
// router.put('/api/articles/:id', usercont.userInfo, articlecont.update)