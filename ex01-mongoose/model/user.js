var mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
         unique: true,
        required: true
    },
    firstname: {
        type: String,
        // unique: true,
        required: true
    },
    lastname: {
        type: String,
        // unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        // required: true
    }
});
var user = mongoose.model('user', userSchema);
module.exports = user;