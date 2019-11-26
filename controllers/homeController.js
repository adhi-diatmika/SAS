const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/users');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.viewHome = (req, res, next) => {
    res.render("home", {
        title: "Home"
    });
}

exports.viewSignUp = (req, res, next) => {
    res.render("signUp", {
        title: "Sign Up"
    });
}

exports.doLogin = (req, res, next) => {
    console.log(req.body)
    let fetchUser;
    User.findOne({username: req.body.username})
        .then(user => {
            if(!user) {
                req.flash('error', 'Invalid authentication credentials!');
                return res.redirect('/home');
            }
            fetchUser = user;
            return bcryptjs.compare(req.body.password, user.password);
        })
        .then(result => {
            if(!result) {
                req.flash('error', 'Invalid authentication credentials!');
                return res.redirect('/home');
            }
            const token = jwt.sign(
                { username: fetchUser.username, userId: fetchUser._id, level: fetchUser.level },
                "sEcreT_coDE",
                { expiresIn: "1h" }
            );
            const redirectTo = fetchUser.level === 0 ? '/applicant' : fetchUser.level === 1 ? '/universityAdmin' : '/adminSAS';
            return res.redirect(redirectTo);
        })
        .catch(err => {
            req.flash('error', 'Invalid authentication credentials!');
            return res.redirect('/home');
        });
}