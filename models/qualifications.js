const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

var QualificationSchema = new mongoose.Schema({
    qualificationName: String,
    minimumScore: Number,
    maximumScore: Number,
    gradeList: String,
    resultDescription: String
});

module.exports = mongoose.model('qualifications', QualificationSchema);