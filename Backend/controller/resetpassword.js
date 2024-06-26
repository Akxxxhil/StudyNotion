const bcrypt=require("bcrypt")
const User = require("../model/user")
const mailsender = require("../utils/mailSender")

exports.resetPasswordToken = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Your Email is not registered with us"
            })
        }

        //genearte token and update in DB 
        const token = await crypto.randomUUID()
        const updateDetails = await User.findOneAndUpdate({ email }, {
            token: token,
            resetpasswordExpiry: Date.now() + 5 * 60 * 1000
        }, { new: true })

        //create url
        const url = `http://localhost:5173/update-password/${token}`

        await mailsender(email, "Password reset Link", `password Reset Link ${url}`)

        return res.status(200).json({
            success: true,
            message: "Email Sent Successfully.please check and change password"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while reset password"

        })
    }
}


exports.resetpassword=async(req,res)=>{
   try {
    const {password,confirmpassword,token}=req.body

    if(password!==confirmpassword){
        return res.status(401).json({
            success: false,
            message: "password not matched"

        })
    }
    const userDetails=await User.findOne({token:token})
    if(!userDetails){
        return res.status(401).json({
            success: false,
            message: "Token is not Valid"

        }) 
    }

    //token time check
    if(userDetails.resetpasswordExpiry > Date.now()){
        return res.status(401).json({
            success: false,
            message: "Token is Expired"

        }) 
    }
    const hashedpassword=await bcrypt.hash(password,10) 

    await User.findOneAndUpdate({password:hashedpassword},{token:token},{new:true})

    return res.status(200).json({
        success: true,
        message: "Password CHnaged Successfully"

    }) 
   } catch (error) {
    console.log(error);
    return res.status(500).json({
        success: false,
        message: "Something went wrong while reset password"

    })
   }

}


