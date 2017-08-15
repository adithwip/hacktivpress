require('dotenv').config()
const sec = process.env.TOKEN_SECRET
const saltRounds = Number(process.env.SALT_ROUNDS)

var User = require('../models/user')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

let signup = (req, res) => {
    var salt = bcrypt.genSaltSync(saltRounds)
    var hash = bcrypt.hashSync(req.body.password, salt)

    var newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash
    })
    newUser.save((err, user) => {
        if (err) {
            res.send(err)
        } else {
            res.send(user)
        }
    })
}

let login = (req, res) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({ username: username }, function(err, user) {
        if (err) {
            res.send(err)
        } else {
            if (user) {
                bcrypt.compare(password, user.password)
                    .then(result => {
                        if (result) {
                            var token = jwt.sign({ _id: user._id, username: user.username, email: user.email }, sec)
                            res.send({ token: token })
                        } else {
                            res.send({ msg: 'Incorrect password' })
                        }
                    })
            } else {
                res.send({ msg: 'User not found' })
            }
        }
    })
}

let userData = (req, res) => {
    let token = req.body.token
    if (token) {
        jwt.verify(token, sec, (err, decoded) => {
            res.send(decoded)
        })
    } else {
        res.send({ msg: 'Not logged in' })
    }
}

let userInfo = (req, res, next) => {
    let token = req.body.token
    if (token) {
        jwt.verify(token, sec, (err, decoded) => {
            if (!err) {
                req.body.creator = decoded._id;
                next()
            } else {
                res.send(err)
            }
        })
    } else {
        res.send({ msg: 'Not logged in' })
    }
}

module.exports = {
    signup,
    login,
    userInfo,
    userData
}