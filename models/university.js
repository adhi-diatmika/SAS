const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

var universitySchema = new mongoose.Schema({
    universityName: String,
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
});

// userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('University', universitySchema);