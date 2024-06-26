const mongoose = require("mongoose")
const ratingandreviews = require("../model/RatingandReview")
const course = require("../model/course")

exports.createRating = async (req, res) => {
    try {
        const userid = req.user.id
        const { rating, review, courseid } = req.body
        const courseDeatils = await course.findOne({
            _id: courseid,
            studentsEnrolled: { $eleMatch: { $eq: userid } }
        })
        if (!courseDeatils) {
            return res.status(401).json({
                success: false,
                message: "courseDeatils Not found"
            })
        }
        //check if alredy reviewd

        const alredayReviewd = await ratingandreviews.findOne({ userid, courseid })
        if (!alredayReviewd) {
            return res.status(401).json({
                success: false,
                message: "Course is alreday Reviewd"
            })
        }

        const newratingreview = await ratingandreviews.create({
            rating, review, user: userid, course: courseid
        })

        //update in course model

        await course.findByIdAndUpdate({ _id: courseid }, {
            $push: {
                ratingandreviews: newratingreview._id
            }
        }, { new: true })

        return res.status(200).json({
            success: true,
            message: "newratingreview is published"
        })
    } catch (error) {

    }
}

exports.getaveragerating = async (req, res) => {
    try {
        const courseId = req.body.courseId;


        //calculate average rating
        const result = await ratingandreviews.aggregate([
            {
                $match: {
                    course: new mongoose.Types.ObjectId(courseId)
                },
            },
            {
                $group: {
                    _id: null,
                    averagerating: { $avg: "$rating" }
                }
            }
        ])

        if (result.length > 0) {
            return res.status(200).json({
                success: true,
                averagerating: result[0].averagerating
            })
        }
        if (result.length < 0) {
            return res.status(500).json({
                success: false,
                averagerating: 0,
                message: "No Ratings found"
            })
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

//get all rating

exports.getallrating=async(req,res)=>{
    try {
        const reviews=await ratingandreviews.find({})
                            .sort({rating:"desc"})
                            .populate({
                                path:"user",
                                select:"firstname lastname email image"
                            })
                            .populate({
                                path:"course",
                                select:"coursename"
                            }).exec()

    return res.status(200).json({
        success:true,
        message:"All ratings are fetched Successfully"
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

