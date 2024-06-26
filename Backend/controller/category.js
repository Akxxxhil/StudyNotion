const category = require("../model/category")


// Tags craetion 

exports.createcategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        if (!name || !description) {
            return res.status(401).json({
                sucess: false,
                message: "Everyfield is required"
            })
        }
        const tagDetails = await category.create({
            name: name,
            description: description
        })
        console.log(tagDetails);
        return res.status(200).json({
            sucess: true,
            message: "Tags craeted Successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            sucess: false,
            message: "Something went wrong in craeting Tag"
        })
    }
}

//get all tag

exports.craeteAllcategory = async (req, res) => {
    try {
        const allTags = await category.find({}, { name: true }, { description: true })
        return res.status(200).json({
            sucess: true,
            message: "Tags fetched Successfully",
            allTags
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            sucess: false,
            message: "Something went wrong in all Tag"
        })
    }
}

exports.categorypagesDeatisl = async (req, res) => {
    try {
        const { Categoryid } = req.body;
        const selcetdCategory = await category.findById(Categoryid)
            .populate("courses")
            .exec()
        if (!selcetdCategory) {
            return res.status(500).json({
                success: false,
                message: "Something went wrong Data not found"
            })
        }

        const differnetCategories = await category.find({
            _id: { $ne: Categoryid },
        }).populate("courses")
            .exec()

            return res.status(200).json({
                success: true,
                selcetdCategory,
                differnetCategories,
                message: "Fetched Success"
            })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong in Category pages"
        })
    }
}