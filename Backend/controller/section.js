const section = require("../model/section")
const course = require("../model/course")


exports.craetesection = async (req, res) => {
    try {
        const { sectionname, courseId } = req.body
        if (!sectionname || !courseId) {
            return res.status(401).json({
                success: false,
                message: "All fields are required"
            })
        }

        //craete section

        const newSection = await section.create({ sectionname })

        //update in course
        const courseupdate = await course.findByIdAndUpdate(
            courseId,
            {
                $push: {
                    coursecontent: newSection._id
                }
            },
            { new: true }
        )
        //use populate to replay section subsections both in the updated course details
        return res.status(200).json({
            success: true,
            message: "Section created Successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Unable to create Section"
        })
    }
}

exports.updateSection=async (req,res)=>{
    try {
        const { sectionname, sectionId } = req.body
        if (!sectionname || !sectionId) {
            return res.status(401).json({
                success: false,
                message: "All fields are required"
            })
        }

        const updateName=await section.findByIdAndUpdate(sectionId,{sectionname},{new:true})
        return res.status(200).json({
            success: true,
            updateName,
            message: "Section Name updated Successfully"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Unable to Update Section"
        }) 
    }
}

exports.deleteSection=async(req,res)=>{
    try {
        const {sectionId}=req.params;

        const deletesection=await section.findByIdAndDelete(sectionId)
        return res.status(200).json({
            success: trye,
            deletesection,
            message: "Section Name deleted Successfully"
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Unable to delete Section"
        })  
    }
}