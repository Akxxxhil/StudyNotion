const Subsection=require("../model/subsection")
const section=require("../model/section")
const {uploadImagetoCloudinary} =require("../utils/imageUploader")



exports.createSubsection=async(req,res)=>{
    try {
        const {sectionId,title,timeduration,description}=req.body

        const video=req.files.videofiles

        if(!sectionId || !title || !timeduration || !description){
            return res.status(401).json({
                success:false,
                message:"All Fields are required"
            })
        }

        //upload video to cloudinary
        const videoDetails=await uploadImagetoCloudinary(video,process.env.FOLDER_NAME)

        const SubsectionDetails = await Subsection.create({
            title,
            timeduration,
            description,
            videourl:videoDetails.secure_url
            
        })

        const updatesection=await section.findByIdAndUpdate(sectionId,
            {
                $push:{
                    subsection:SubsectionDetails._id
                }
            },
            {new :true}
        )

        return res.status(200).json({
            success:true,
            message:"Subsection Created Successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Unable to create Section"
        })
    }
}

exports.updateSubsection=async(req,res)=>{
    try {
        const {title,subsectionId}=req.body
        if (!title || !subsectionId) {
            return res.status(401).json({
                success: false,
                message: "All fields are required"
            })
        }

        const updatedsubsection=await Subsection.findByIdAndUpdate(subsectionId,
            {title},{new:true}
        )
        return res.status(200).json({
            success: true,
            updatedsubsection,
            message: "updatedsubsection  updated Successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Unable to Update updatedsubsection"
        }) 
    }
}

exports.deletesubSection=async(req,res)=>{
    try {
        const {subsectionId}=req.params;

        const deletesection=await section.findByIdAndDelete(subsectionId)
        return res.status(200).json({
            success: trye,
            deletesection,
            message: "subSection  deleted Successfully"
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Unable to delete subSection"
        })  
    }
}