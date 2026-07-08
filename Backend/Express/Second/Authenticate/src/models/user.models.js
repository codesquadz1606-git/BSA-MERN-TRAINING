const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        enum:["super-admin","admin","user"]
    },
    
});

const userModels=mongoose.model("users",userSchema);

module.exports=userModels;