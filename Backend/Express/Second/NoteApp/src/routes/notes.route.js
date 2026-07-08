const express = require("express")
const noteModel = require("../model/notes.model")
const router = express.Router()

router.get("/notes",async(req,res)=>{
    const data=await noteModel.find()
    res.json(data);
})

router.post("/notes",async (req,res)=>{
    const {id,title}=req.body

    const note= await noteModel.create({
        noteId:id,
        title:title
    })

    res.json({
        message:"Note Created",
        note
    })
})

router.put("/notes/:id",async (req,res)=>{
    const {id}=req.params
    const {title}=req.body
    const data= await noteModel.find();

    const exists=data.find((el)=>el.noteId==id)
    if(exists){
        const update=await noteModel.updateOne(
            {noteId:id},
            {title:title}
        )

        res.json({
            message:"Data Updated",
            title
        })
    }
    else{
        res.send("Not FOund")
    }

    // res.send(exists)
    // res.json(data)
})

module.exports=router