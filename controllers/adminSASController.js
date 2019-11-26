const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcryptjs = require('bcryptjs');
const Qualification = require('../models/qualifications');

exports.viewAdminSAS = (req, res, next) => {
    res.render("adminSAS", {
        title: "Admin SAS"
    });
}
exports.viewMaintainQualification = (req, res, next) => {
    res.render("maintainQualification", {
        title: "Maintain Qualification"
    });
}
exports.viewRegisterUniversity = (req, res, next) => {
    res.render("registerUniversity", {
        title: "Register University"
    });
}

exports.viewAddQualification = (req, res, next) => {
    res.render("addQualification", {
        title: "Add Qualification"
    });
}

exports.viewAddUniversity = (req, res, next) => {
    res.render("addUniversity", {
        title: "Add University"
    });
}

exports.viewAddAdmin = (req, res, next) => {
    res.render("addAdmin", {
        title: "Add University Admin"
    });
}

exports.viewMaintainQualification = (req, res, next) => {
    let fetchPost;
    const postQuery = Qualification.find();
    postQuery.then(documents => {
        fetchPost = documents;
        return Qualification.count;
    }).then(count => {
        console.log(fetchPost)
        res.render("maintainQualification", {
            title: "Maintain Qualification",
            page: 'maintain',
            qualificationList: fetchPost
        });
    }).catch(err => {
        req.flash('error', 'Cannot load Qualification List, ' + err)
        res.render("maintainQualification", {
            title: "Maintain Qualification",
            page: 'maintain',
            qualificationList: []
        });
    })
    
}

exports.doAddQualification = (req, res, next) => {
    const qualification = new Qualification({
        qualificationName: req.body.qualificationName,
        minimumScore: req.body.minimumScore,
        maximumScore: req.body.maximumScore,
        gradeList: req.body.gradeList,
        resultDescription: req.body.resultDescription
    });

    qualification.save()
    .then(result => {
        req.flash('success', 'Succesfully add data');
        res.redirect('/maintainQualification');
    })
    .catch(err => {
        req.flash('error', 'Something went wrong, ' + err);
        res.redirect('/addQualification');
    })
}