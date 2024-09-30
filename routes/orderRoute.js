const express=require ("express");
const path=require("path");

const orderRoute=express.Router();
orderRoute.get("/dashboard",(req,res)=>{
   // res.sendFile(path.join (__dirname,"../Dashboard.html"));
   res.send("Order Dashboard");
})
orderRoute.get("/details/:x-:y",(req,res)=>{
  //  res.sendFile(path.join (__dirname,"../Profile.html"));
  res.send("Order details page "+req.params.x+" "+req.params.y);


})
orderRoute.get("/abc",(req,res)=>{
    res.send("Pattern route");

})
module.exports=orderRoute;
//STATIC ROUTE 