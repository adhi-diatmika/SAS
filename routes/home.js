const express = require('express');
const HomeController = require('../controllers/homeController');
const AdminSASController = require('../controllers/adminSASController');
const UniversityAdminController = require('../controllers/universityAdminController');
const ApplicantController = require('../controllers/applicantController');
const router = express.Router();

router.get('/', HomeController.viewHome);
router.get('/home', HomeController.viewHome);
router.get('/signUp', HomeController.viewSignUp);
//post
router.post('/signup', ApplicantController.doRegister);
router.post('/home', HomeController.doLogin);

router.get('/adminSAS', AdminSASController.viewAdminSAS);
router.get('/maintainQualification', AdminSASController.viewMaintainQualification);
router.get('/registerUniversity', AdminSASController.viewRegisterUniversity);
router.get('/addUniversity', AdminSASController.viewAddUniversity);
router.get('/addAdmin', AdminSASController.viewAddAdmin);
router.get('/addQualification', AdminSASController.viewAddQualification);
router.post('/addQualification', AdminSASController.doAddQualification);

router.get('/universityAdmin', UniversityAdminController.viewUniversityAdmin);
router.get('/recordProgramme', UniversityAdminController.viewRecordProgramme);
router.get('/reviewApplication', UniversityAdminController.viewReviewApplication);
router.get('/addRecordProgramme', UniversityAdminController.viewAddRecordProgramme);
router.post('/addRecordProgramme', UniversityAdminController.doAddProgramme);

router.get('/applicant', ApplicantController.viewApplicant);
router.get('/applyForProgramme', ApplicantController.viewApplyForProgramme);

module.exports = router;