const express=require("express");
const app=express();
const Users=require("./models/userModel.js")
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://userroot:Password4001@cluster0.cmk41.mongodb.net/ecommerce")
.then((response)=>{
    console.log("Connected ...");
}).catch((err)=>{
    console.log("Error:"+err);

})
app.get("/addUser",(req,res)=>{
//dbinstance.collection("users").find
//Users.findOneandUpdate({"username":"Test"},{"name":"anc"})
//Model
    let obj={};
    obj.firstname="fname ";
    obj.lastname="lname";

    obj.username="testuser";
    obj.password="Testpass";
    obj.city="TestCity";

    const user=new Users(obj);
    user.Name="Code Quotient";
    console.log(user.firstname," ",user.lastname);
    


     user.save().then((response)=>{
         console.log("Saved");
         res.end();

     })



})

app.listen(3000);