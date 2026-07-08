const mongoose=require("mongoose");

const notesSchema=new mongoose.Schema({
    noteId:{
        type:Number,
        unique:true
    },
    title:String
})

const noteModel=mongoose.model("notes",notesSchema)

module.exports=noteModel