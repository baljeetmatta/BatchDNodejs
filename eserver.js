const express=require("express");
const app=express();

app.use(express.static("."));
app.use(express.urlencoded());
app.set("view engine","ejs");
//app.set("views",)
app.get("/",(req,res)=>{
    res.render("home",{msg:"CodeQuotient",courses:["One","Two","Three"]});

    //views/home.ejs

})
app.listen(3000);
