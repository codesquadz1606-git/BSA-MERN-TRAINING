const bcrypt=require("bcryptjs")
const userModels = require("../models/user.models")
const jwt=require("jsonwebtoken");

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

    let token=jwt.sign(
        { id:user._id , role:user.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn : "1hr" }
    )

    res.json({
        message:"Logged In Successfully",
        token
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