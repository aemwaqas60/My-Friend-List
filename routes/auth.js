const express = require("express");
const router = express.Router();
const controller_Auth = require("../controllers/auth");
const passport = require('passport');

// auth routes
router.post('/signin', controller_Auth.signin);
router.post('/signup', controller_Auth.signup);
router.get('/logout', controller_Auth.logout);  
router.post('/checkUsername', controller_Auth.checkUsername);
router.post('/checkEmail', controller_Auth.checkEmail);


module.exports = router;