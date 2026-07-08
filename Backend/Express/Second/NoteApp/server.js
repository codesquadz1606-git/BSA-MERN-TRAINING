const express=require("express");
const router = require("./src/routes/notes.route");
const connectToDB = require("./src/db/db");
const app=express();

app.use(express.json());

connectToDB()
app.use("/",router)

app.listen(3000,()=>{
    console.log("Listening to Port 3000");
})