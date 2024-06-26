const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../model/user");


//auth
exports.auth = async (req, res, next) => {
    try {
        const token =
            req.cookies.token ||
            req.body.token ||
            req.header("Authorization").replace("Bearer ", "");

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is Missing",
            });
        }
        try {
            const decode = jwt.verify(token, process.env.JWT_KEY);
            console.log(decode);
            req.user = decode;
        } catch (error) {
            console.log(error);
            return res.status(401).json({
                success: false,
                message: "Token is Not Verified",
            });
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success: false,
            message: "Something went wrong in accessing the data in auth ",
        });
    }
};


//isstudent

exports.isStudent = async (req, res, next) => {
    try {
        if (req.user.accountType !== "Student") {
            return res.status(401).json({
                success: false,
                message: "This Route is protected for Student",
            });
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success: false,
            message: "Something went wrong in verifing the auth of student",
        });
    }
}

// isInstructor
exports.isInstructor = async (req, res, next) => {
    try {
        if (req.user.accountType !== "Instructor") {
            return res.status(401).json({
                success: false,
                message: "This Route is protected for Instructor",
            });
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success: false,
            message: "Something went wrong in verifing the auth of student",
        });
    }
}

// isAdmin
exports.isAdmin = async (req, res, next) => {
    try {
        if (req.user.accountType !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This Route is protected for Admin",
            });
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success: false,
            message: "Something went wrong in verifing the auth of student",
        });
    }
}
