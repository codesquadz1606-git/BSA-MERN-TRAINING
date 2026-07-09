const express=require("express");
const verfifyToken = require("../middlewars/auth.middleware");
const authorizeRoles = require("../middlewars/role.middlleware");
const router=express.Router();

// For Super-Admin Only
router.get("/super-admin",verfifyToken,authorizeRoles("super-admin"),(req,res)=>{
    res.json({
        message:"Welcome Super Admin"
    })
})

// For Super-Admin , Admin Only
router.get("/admin",verfifyToken,authorizeRoles("super-admin","admin"),(req,res)=>{
    res.json({
        message:"Welcome Admin"
    })
})

// For All the Users
router.get("/users",verfifyToken,authorizeRoles("super-admin","admin","user"),(req,res)=>{
    res.json({
        message:"Welcome Users"
    })
})

module.exports=router;