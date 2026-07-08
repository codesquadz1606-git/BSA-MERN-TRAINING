const bcrypt=require("bcryptjs")
const userModels = require("../models/user.models")

const login=async(req,res)=>{
    const {username , password} = req.body;

    const user=await userModels.findOne({username});
    if(!user){
        return res.status(404).json({
            message:"Data Not Exist"
        })
    }

    const isPassword=await bcrypt.compare(password,user.password);

    if(!isPassword){
        return res.status(400).json({
            message:"Incorrect Password"
        })
    }

    res.json({
        message:"Logged In Successfully"
    })
}
const register=async(req,res)=>{
    const {username,password,role}=req.body
    const hashPassword=await bcrypt.hash(password,10)

    const data=userModels.create({
        username,
        password:hashPassword,
        role
    });

    res.json({
        message:"Created Account",
        data
    })
} 

module.exports={
    login,
    register
}