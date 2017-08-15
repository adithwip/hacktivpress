const mongoose = require('mongoose')
const validator = require('validator')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: function(val) {
            return validator.isEmail(val);
        }
    },
    password: {
        type: String,
        required: true
    }
})

var User = mongoose.model('User', userSchema);

module.exports = User;