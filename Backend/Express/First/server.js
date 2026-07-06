const express = require("express");
const app=express()
let users=[
    {
        id:1,
        name:"Udit"
    }
]


app.use(express.json()) // This is used to parse the incoming request body in JSON format. It allows us to access the data sent in the request body using req.body.

// routes.
app.get("/users",(req,res)=>{
    // res.json({
    //     message:"Data Fetched",
    //     users
    // })
    
})

app.post("/users",(req,res)=>{
    res.send("User Created");
})

app.put("/users",(req,res)=>{
    res.send("User Updated");
})

app.delete("/users",(req,res)=>{
    res.send("User Deleted");
})

app.listen(3000,()=>{
    console.log("Listening at 3000")
})

// Their are three format by which we can send data to the server.
// req.body
app.post("/workers",(req,res)=>{
    // let {name}=req.body;
    // res.json({name});
    // console.log(name)
})

// req.paramas
app.get("/workers/:id",(req,res)=>{
    const {id} = req.params;
    console.log(req.params)

    res.send(id)
})

// req.query
app.get("/detail",(req,res)=>{
    const {name}=req.query;
    console.log(name)
    res.send(name)
})