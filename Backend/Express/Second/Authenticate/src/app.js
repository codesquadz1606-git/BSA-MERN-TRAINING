const express=require("express");
const app=express();
const userRoutes=require("./router/user.routes");
const dbConnect = require("./config/db");

dbConnect()

app.use(express.json())
app.use("/api/auth",userRoutes);

module.exports=app;