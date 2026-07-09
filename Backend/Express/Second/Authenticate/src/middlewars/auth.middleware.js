const jwt=require("jsonwebtoken");
const verfifyToken=(req,res,next)=>{
    let token;
    let authHeaders=req.headers.Authorization || req.headers.authorization

    if(authHeaders && authHeaders.startsWith("Bearer")){
        token=authHeaders.split(" ")[1];
    }

    if(!token){
        return res.status(401).json({
            message:"Access Denied"
        })
    }

    let decode=jwt.verify(token,process.env.JWT_SECRET_KEY); // jwt theek hai ya  nhii

    req.user=decode;
    console.log("Decode of JWT is",req.user);
    
    next()
}

module.exports=verfifyToken