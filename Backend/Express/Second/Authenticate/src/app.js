const express=require("express");
const app=express();
const authRoutes=require("./router/user.routes");
const userRoutes=require("./router/user1.routes")
const dbConnect = require("./config/db");

dbConnect()

app.use(express.json())
app.use("/api/auth",authRoutes);
app.use("/api",userRoutes);

module.exports=app;