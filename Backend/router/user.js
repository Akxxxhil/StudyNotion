//Import the required modules
const express = require('express');
const router = express.Router();

const {
    login,
    signup, 
    sendotp,
    changePassword,
} = require("../controller/controlerauth")

const {
    resetPasswordToken,
    resetpassword,
} = require("../controller/resetpassword");



const{auth}=require("../middleware/middlewareauth")
//Route for user login
router.post('/login', login);

//Route for user signup
router.post('/signup', signup);

//Route for sending OTP to the user's email
router.post('/sendotp', sendotp);

//Route for changing the password
router.post('/changePassword', auth, changePassword);

//**********************************************************************************
//                          Reset Password
//**********************************************************************************


//Route for generating a reset password token
router.post('/reset-password-token', resetPasswordToken);

//Route for resetting user's password after verification
router.post('/reset-password', resetpassword);

//Export the router for use in the main application
module.exports = router;