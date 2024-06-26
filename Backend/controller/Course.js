const Course=require("../model/course")
const Tags=require("../model/category")
const User=require("../model/user")
require("dotenv").config()
const {uploadImagetoCloudinary}=require("../utils/imageUploader")

exports.createCourse=async(req,res)=>{
    try {
        //fetching all the data
        const{coursename,coursedescription,whatyouwilllearn,price,tag}=req.body

        //get thumbnail
        const thumbnail=req.files.thumbnailImage

        if(!coursename || !coursedescription ||!whatyouwilllearn || !price || !tag){
            return res.status(401).json({
                sucess:false,
                message:"Everyfield is required"
            })
        }

        //check for the instructor
        const userId=req.user.id
        const instructorDetails=await User.findById(userId)
        console.log("instructorDetails :",instructorDetails);
        if(!instructorDetails){
            return res.status(401).json({
                sucess:false,
                message:"instructorDetails not found"
            })
        }

        //given tag is valid or not
        const tagDetails=await Tags.findById(tag)
        if(!tagDetails){
            return res.status(401).json({
                sucess:false,
                message:"tagDetails not found"
            })
        }

        //upload image to cloudinary
        const thumbnailImage=await uploadImagetoCloudinary(thumbnail,process.env.FOLDER_NAME)

        //new COurse

        const newCourse=await Course.create({
            coursename,
            coursedescription,
            instructorDetails:instructorDetails._id,
            whatyouwilllearn:whatyouwilllearn,
            price:price,
            tag:tagDetails._id,
            thumbnail:thumbnailImage.secure_url

        })


        //adding course into user schema of instructor
        await User.findByIdAndUpdate(
            {_id:instructorDetails._id},
            {
                $push:{
                    courses:newCourse._id
                }
            },
            {new:true}
        )

        //update the tag schema hw

        return res.status(200).json({
            sucess:true,
            message:"new Course Added Successfully",
            newCourse
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            sucess:false,
            message:"failed to create course."
        })
    }
}


exports.showAllCourses=async(req,res)=>{
    try {

        const allCourses=await Course.find({})
        //     coursename:true,
        //     instructor:true,
        //     whatyouwilllearn:true,
        //     ratingandreviews:true,
        //     thumbnail:true,
        //     studentsEnrolled:true,

        // }).populate("instructor").exec()
        return res.status(200).json({
            sucess:true,
            message:"All Courses fetched Successfully",
            allCourses
        }) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            sucess:false,
            message:"something went wrong . so unable to fetch all the courses"
        }) 
    }
}

exports.getCoursedetails=async(req,res)=>{
    try {
        const {courseId}=req.body;

        const coursedeatils=await Course.find({_id:courseId}).populate(
            {
                path:"instructor",
                populate:{
                    path:"additionalDetails"
                }
            }
        ).populate("coursecontent")
        .populate("ratingandreviews")
        .populate({
            path:"coursecontent",
            populate:{
                path:"subsection"
            }
        })

        if(!coursedeatils){
            return res.status(401).json({
                success:false,
                message:"coursedeatils not found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"coursedeatils  founded Successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong.coursedeatils Not  fetched Successfully"
        })
    }
}