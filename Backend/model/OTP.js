const mongoose = require("mongoose");
const mailsender = require('../utils/mailSender');

const otpschema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 5 * 60 // 5 minutes
    }
});

// Function to send verification mail
async function sendverificationmail(email, otp) {
    try {
        const mailResponse = await mailsender(email, "Verification Mail", `<p>Your OTP is: ${otp}</p>`);
        console.log("Email sent successfully: ", mailResponse);
    } catch (error) {
        console.log("Error while sending email: ", error.message);
        throw error;
    }
}

// Pre-save hook to send verification mail
otpschema.pre("save", async function(next) {
    if (this.isNew) {
        await sendverificationmail(this.email, this.otp);
    }
    next();
});

module.exports = mongoose.model("Otp", otpschema);
