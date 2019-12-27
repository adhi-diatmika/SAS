const express = require('express');
const HomeController = require('../controllers/home')
const router = express.Router();

router.get('', HomeController.viewHome);
router.get('/signin', HomeController.viewLogin);
router.get('/logout', HomeController.doLogout);
router.post('/signin', HomeController.doLogin);

module.exports = router;