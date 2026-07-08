const mongoose=require("mongoose");
async function dbConnect(){
    try{
        const connect= await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected To DB");
    }
    catch(err){
        console.log(err)
    }
}

module.exports=dbConnect;