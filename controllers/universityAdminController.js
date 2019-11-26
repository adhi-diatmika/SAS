const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcryptjs = require('bcryptjs');
const Programme = require('../models/programmes');

exports.viewUniversityAdmin = (req, res, next) => {
    res.render("universityAdmin", {
        title: "University Admin"
    });
}

// exports.viewRecordProgramme = (req, res, next) => {
//     res.render("recordProgramme", {
//         title: "Record Programme"
//     });
// }

exports.viewRecordProgramme = (req, res, next) => {
    let fetchPost;
    const postQuery = Programme.find();
    postQuery.then(documents => {
        fetchPost = documents;
        return Programme.count;
    }).then(count => {
        console.log(fetchPost)
        res.render("recordProgramme", {
            title: "Record Programme",
            page: 'record',
            programmeList: fetchPost
        });
    }).catch(err => {
        req.flash('error', 'Cannot load Programme List, ' + err)
        res.render("recordProgramme", {
            title: "Record Programme",
            page: 'record',
            programmeList: []
        });
    })
}

exports.viewReviewApplication = (req, res, next) => {
    res.render("reviewApplication", {
        title: "Review Application"
    });
}
exports.viewAddRecordProgramme = (req, res, next) => {
    res.render("addRecordProgramme", {
        title: "Add Programme"
    });
}

exports.doAddProgramme = (req, res, next) => {
    const programme = new Programme({
        programmeName: req.body.programmeName,
        description: req.body.description,
        closingDate: req.body.closingDate,
    });

    programme.save()
    .then(result => {
        req.flash('success', 'Succesfully add data');
        res.redirect('/recordProgramme');
    })
    .catch(err => {
        req.flash('error', 'Something went wrong, ' + err);
        res.redirect('/addRecordProgramme');
    })
}