const express = require('express');
const StudentController = require('../controllers/student')
const router = express.Router();

router.get('/signup', StudentController.viewRegister);
router.post('/signup', StudentController.doRegister);

module.exports = router;