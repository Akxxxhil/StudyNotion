const nodemailer = require("nodemailer");
const mailsender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
        const info = transporter.sendMail({
            from: "Studynation || by Akhil",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        });
        console.log(info);
        return info
    } catch (error) {
        console.log(error.message);
    }
};
module.exports=mailsender
