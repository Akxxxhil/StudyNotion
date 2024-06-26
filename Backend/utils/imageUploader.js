const cloudinary = require('cloudinary').v2

exports.uploadImagetoCloudinary=async(file,folder,height,quality)=>{
    const options={folder}

    if(height){
        options.height=height
    }
    if(quality){
        options.height=quality
    }

    return await cloudinary.uploader.upload(file.tempelatePath,options)
}