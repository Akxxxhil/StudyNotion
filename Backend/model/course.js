const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    coursename: {
        type: String,
        trim: true,
    },
    coursedescription: {
        type: String,
        trim: true,
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "User",
    },
    whatyouwilllearn: {
        type: String,
    },
    coursecontent: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Section",
        },
    ],
    ratingandreviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RatingandReview",
        },
    ],
    price: {
        type: "Number",
    },
    thumbnail: {
        type: "String",
    },
    tag: {
        type: [String],
        required: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
    },
    studentsEnrolled: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
    status:{
        type:String,
        enum:["Draft","Published"]
    }
});

module.exports = mongoose.model("Course", courseSchema);
