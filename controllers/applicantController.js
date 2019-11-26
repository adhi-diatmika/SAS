const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcryptjs = require('bcryptjs');
const User = require('../models/users');

exports.viewApplicant = (req, res, next) => {
    res.render("applicant", {
        title: "Applicant"
    });
}

exports.viewApplyForProgramme = (req, res, next) => {
    res.render("applyForProgramme", {
        title: "Apply For Programme"
    });
}

exports.doRegister = (req, res, next) => {
    bcryptjs.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: hash,
                level: 0
            });

            user.save()
                .then(result => {
                    req.flash('success', 'Congratulation, you successfuly register to SAS');
                    res.redirect('/applicant');
                })
                .catch(err => {
                    req.flash('error', 'Something went wrong, ' + err);
                    res.redirect('/signUp');
                })
        });
}
