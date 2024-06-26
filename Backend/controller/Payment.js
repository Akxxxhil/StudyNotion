const course = require("../model/course")
const user = require("../model/user")
const { instance } = require("../config/Razorpay")

const mailsender = require("../utils/mailSender")
const mongoose=require("mongoose")

//captuire the payment and intiate the razorpay ordrer

exports.capturePayment = async (req, res) => {
    const { course_id } = req.body;
    const Userid = req.user.id;

    if (!course_id) {
        return res.status(401).json({
            success: false,
            message: "Please provide a valid course id"
        })
    }
    let Course;

    try {
        Course = await course.findById(course_id);
        if (!Course) {
            return res.status(401).json({
                success: false,
                message: "Please provide a valid course "
            })
        }
        //user alreday enrolled
        const uid = new mongoose.Types.ObjectId(Userid)
        if (course.studentsEnrolled.uid) {
            return res.status(200).json({
                success: true,
                message: "Student is already Enrolled"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: error.message
        })
    }
    const amount = course.price;
    const currency = "INR"
    const options = {
        amount: amount * 100,
        currency,
        receipt: Math.random(Date.now().toLocaleString()),
        notes: {
            course_id: course_id,
            Userid
        }
    }
    try {
       const PaymentResposne=await instance.orders.create(options)
       console.log(PaymentResposne);
       return res.status(200).json({
        success:true,
        courseName:course.coursename,
        coursedescription:course.coursedescription,
        orderId:PaymentResposne._id,

        message:"Done with payment"
    })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Unable to do payment"
        })
    }
}


exports.verifySignature=async(req,res)=>{
   const webhookSecreat="12345678"
   //This is inbuilt signature from RaZorpay
   const signature=req.headers["x-razorpay-signature"]

  const shasum= crypto.createHmac("sha256",webhookSecreat)
  shasum.update(JSON.stringify(req.body))
  const digest=shasum.digest("hex")
  if(signature===digest){
    console.log("Payment Authorized");

    const {course_id,Userid}=req.body.payload.payment.entity.notes;
    try {
        //find the course and enroll to the student
        const enrolledCourse= await course.findOneAndUpdate(
            {_id:course_id},
            {$push:{studentsEnrolled:Userid}},
            {new:true}
        )
        if(!enrolledCourse){
            return res.status(500).json({
                success:false,
                message:"Course not found"
            })
        }
        const enrolledStudent=await user.findOneAndUpdate(
            {_id:Userid},
            {$push:{courses:course_id}},
            {new:true}
        )
        console.log(enrolledStudent);

        //send mail for the confirmation
        const emailresponse=await mailsender (enrolledStudent.email,"Congrats Your are enrolled","Congrats")
        return res.status(200).json({
             success:true,
            message:"Signature verified and enrolled to corse and added too"
        })
        
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Unable to add the course"
        })
    }
  }
    
}

