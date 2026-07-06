const express = require("express");
const app=express()
let users=[
    {
        id:1,
        name:"Udit"
    }
]
app.get("/users",(req,res)=>{
    res.json({
        message:"Data Fetched",
        users
    })
})

app.listen(3000,()=>{
    console.log("Listening at 3000")
})