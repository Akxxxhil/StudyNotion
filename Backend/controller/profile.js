const profile = require("../model/Profile")
const user = require("../model/user")

exports.updateProfile = async (req, res) => {
    try {
        const { gender, dateofBirth, about, contactNumber } = req.body

        const id = req.user.id;

        if (!gender || !dateofBirth || !about || !contactNumber) {
            return res.status(401).json({
                success: false,
                message: "All fields are required"
            })
        }

        //finding all the details of the user
        const userdetails = await user.find(id)
        //user se additional details
        const profileId = await userdetails.additionalDetails

        const profileDeatils = await profile.findById(profileId)

        profileDeatils.dateofBirth = dateofBirth
        profileDeatils.gender = gender
        profileDeatils.about = about
        profileDeatils.contactNumber = contactNumber

        await profileDeatils.save()
        return res.status(200).json({
            success: true,
            message: "Profile Updated Successfully",
            profileDeatils
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "unable to update Your Profile"
        })
    }
}


//delete Profile

exports.deleteProfile = async (req, res) => {
    try {
        const id = req.user.id
        const userdetails = await user.findById(id)
        if (!userdetails) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            })
        }
        await profile.findByIdAndDelete({_id:userdetails.additionalDetails});
        await user.findByIdAndDelete({_id:id})
        return res.status(200).json({
            success: true,
            message: "profile deleted Successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Unable to delete the profile"
        })
    }
}

exports.getallprofileDetails=async(req,res)=>{
    try {
        const id=req.user.id;
        const userDetails=await user.findById(id).populate("additionalDetails").exec()
        return res.status(200).json({
            success: true,
            userDetails,
            message: "User data fetched Successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            success: false,
            message: "Unable to fetched error"
        })
    }
}