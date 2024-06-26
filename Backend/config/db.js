const mongoose=require("mongoose")
require("dotenv").config()

const connectdb=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        
    })
    .then(()=>{
        console.log("DB connected Successfully");
    })
    .catch((error)=>{
        console.log("error ",error);
    })
}

module.exports=connectdb