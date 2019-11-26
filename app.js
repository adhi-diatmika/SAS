const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const homeRoute = require('./routes/home');
const adminSASRoute = require('./routes/adminSAS');
const applicantRoute = require('./routes/applicant');
const universityAdminRoute = require('./routes/universityAdmin');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const methodOverride = require('method-override');
const flash = require('connect-flash');
const User = require('./models/users');
const app = express();

mongoose.connect('mongodb://localhost:27017/SAS', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (err) => {
    if (!err) {console.log('MongoDB Connection Succeeded')}
    else{console.log('Error in DB connection ', + err)}
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'publics')));
app.set("view engine", "ejs");
app.use(methodOverride('_method')); // Overide form method attribute fo use method PUT and DELETE
app.use(flash()); // Use to show message
app.locals.moment = require('moment');

app.use(require('express-session')({
    secret: 'Secret Code',
    resave: false,
    saveUninitialized: false
}));

app.use(function(req, res, next) {
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next()
});

app.use('/', homeRoute);
app.use('/adminSAS/', adminSASRoute);
app.use('/applicant/', applicantRoute);
app.use('/universityAdmin/', universityAdminRoute);

module.exports = app;