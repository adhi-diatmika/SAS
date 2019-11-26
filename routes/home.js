const express = require('express');
const HomeController = require('../controllers/homeController');
const UniversityAdminController = require('../controllers/universityAdminController');
const ApplicantController = require('../controllers/applicantController');
const router = express.Router();

router.get('/', HomeController.viewHome);
router.get('/home', HomeController.viewHome);
router.get('/signUp', HomeController.viewSignUp);
//post
router.post('/signup', ApplicantController.doRegister);
router.post('/home', HomeController.doLogin);

router.get('/universityAdmin', UniversityAdminController.viewUniversityAdmin);
router.get('/recordProgramme', UniversityAdminController.viewRecordProgramme);
router.get('/reviewApplication', UniversityAdminController.viewReviewApplication);
router.get('/addRecordProgramme', UniversityAdminController.viewAddRecordProgramme);
router.post('/addRecordProgramme', UniversityAdminController.doAddProgramme);

router.get('/applicant', ApplicantController.viewApplicant);
router.get('/applyForProgramme', ApplicantController.viewApplyForProgramme);

module.exports = router;