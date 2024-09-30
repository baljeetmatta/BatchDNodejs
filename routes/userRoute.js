const express=require ("express");
const path=require("path");

const userRoute=express.Router();
userRoute.get("/dashboard",(req,res)=>{
    //res.sendFile(path.join (__dirname,"../Dashboard.html"));
    res.render("dashboard",{name:req.session.name});
    
})
userRoute.get("/profile",(req,res)=>{
    res.sendFile(path.join (__dirname,"../Profile.html"));
})
module.exports=userRoute;
//STATIC ROUTE 