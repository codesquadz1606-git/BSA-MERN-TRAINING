const mongoose=require("mongoose");

function connectToDB(){
    mongoose.connect("mongodb://localhost:27017/NoteApp")
    .then(()=>{
        console.log("Connect to DB");
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports=connectToDB