const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    level: {
        type: Number,
        default: 0
    }
});

// userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('users', userSchema);