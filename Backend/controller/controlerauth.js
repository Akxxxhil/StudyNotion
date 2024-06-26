const User = require("../model/user")
const otpGenerator = require('otp-generator')
const bcrypt = require("bcrypt")
const OTP = require("../model/OTP")
const Profile = require("../model/Profile")
const jwt = require("jsonwebtoken")
require("dotenv").config()

//1.//send otp

exports.sendotp = async (req, res) => {
    try {
        //fetching email from body
        const { email } = req.body;

        //check userExist
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(401).json({
                success: false,
                message: "user Already Registered"
            })
        }
        //generate otp
        let otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            specialChars: false,
            lowerCaseAlphabets: false
        })
        console.log("Generated OTP:", otp);
        // Save OTP to the database
        const newOtp = new OTP({
            email,
            otp
        });
        await newOtp.save();
        res.status(200).json({
            success: true,
            newOtp,
            message: "OTP sent Successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: true,
            message: error.message
        })
    }


}

//2.//signup

exports.signup = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            email,
            password,
            confirmPassword,
            accountType,
            otp
        } = req.body

        if (!firstname || !lastname || !email || !password || !confirmPassword || !otp) {
            return res.status(403).json({
                success: false,
                message: "All Fields Are Required"
            })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and confirm password are not the same"
            })
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "You are already Registered"
            })
        }

        // OTP verification
        const otpRecord = await OTP.findOne({ email })
        if (!otpRecord || otpRecord.otp !== otp) {
            return res.status(400).json({
                success: false,
                message: "Invalid or expired OTP"
            })
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10)

        // Create profile details
        const profileDetails = await Profile.create({
            gender: null,
            dateOfBirth: null,
            about: null,
            contactNumber: null,
        })

        // Create new user
        const newUser = await User.create({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            accountType,
            additionalDetails: profileDetails._id,
            image: `https://api.dicebear.com/8.x/initials/svg?seed=${firstname} ${lastname}`
        })

        // Delete the OTP record after successful verification
        await OTP.deleteOne({ email })

        return res.status(200).json({
            success: true,
            message: "User registered Successfully",
            newUser
        })
    } catch (error) {
        console.log("Signup Unsuccessful", error);
        return res.status(500).json({
            success: false,
            message: "User not registered Successfully. Please try Again",
        })
    }
}

//3.//login

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(403).json({
                success: false,
                message: "All Fields Are Required"
            });
        }

        const oldUser = await User.findOne({ email });

        if (!oldUser) {
            return res.status(401).json({
                success: false,
                message: "Please SignUp First"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Password is not correct"
            });
        }

        const payload = {
            email: oldUser.email,
            accountType: oldUser.accountType,
            id: oldUser._id
        };

        const token = jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: "2h"
        });

        oldUser.token = token;
        oldUser.password = undefined;

        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true
        };

        return res.cookie("token", token, options).status(200).json({
            success: true,
            message: "Login Successful",
            token,
            user: oldUser
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Login failure please try again later"
        });
    }
};

//4.//Change Password
exports.changePassword = async (req, res) => {
    //get data from body
    //get old pass,new pass ,confirm new 
    //validation 
    //update password in db
    //send email for updated password
    //return response
}