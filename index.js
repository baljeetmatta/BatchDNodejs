const express=require("express");
const esession=require("express-session");
const userRoute=require("./routes/userRoute");

const app=express();//createServer
app.use(express.static("."));
app.use(esession({
    saveUninitialized:true,
    resave:false,
    secret:'SADSA#@$#@$#@4'
}))

app.use("/users",auth,userRoute);
// /users/dashboard
// /users/profile


function auth(req,res,next)
{
    if(req.session.user)
        next();
    else
      res.redirect("/login");


}


const fs=require("fs");
const path=require("path");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/Login",(req,res)=>{
    if(!req.session.user)
   // console.log(req.query);
    //res.send("GEt:Welcome "+req.query.username);
    res.sendFile(path.join (__dirname,"./Login.html"));
    else
    res.redirect("/dashboard");



})
app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/login")
})
// app.get("/dashboard",(req,res)=>{
//     if(req.session.user)
//     res.sendFile(path.join (__dirname,"./Dashboard.html"));
//     else
//     res.redirect("/login");


// })
// app.get("/profile",(req,res)=>{
//     if(req.session.user)
//         res.sendFile(path.join (__dirname,"./profile.html"));
//         else
//         res.redirect("/login");
// })
app.post("/Login",(req,res)=>{
    
    let users=JSON.parse( fs.readFileSync("users.json"));
    let results=users.filter((item)=>{
        if(item.username==req.body.username && item.password==req.body.password)
            return true;

    })
    if(results.length==0)
        res.redirect("/login"); 
    else
    {
        req.session.user="x"
        res.redirect("/users/dashboard");
    }



    // console.log(req.body);
    // let obj={data:20};
    // //res.send("POST request")
    // res.json(obj);

})

// app.get("/about",(req,res)=>{
//     res.send("Welcome to nodejs")
// })

// app.all("*",(req,res)=>{
//     res.status(404).send("Page not found");
    
// })
// app.get("/",(req,res)=>{
//     res.end("Second");
// })
//Callback function 
//req.url ///end points
//for every endpoint create a method
// app.get("/",(req,res)=>{
//     //res.write ("Home PAge express");
//  //   res.end();
//  //res.send("Welcome to nodejs");
//  //Absoulte Path
//  //console.log(__dirname);
//  //res.end();
// res.sendFile(__dirname+"/index.html");

//     //res.sendFile("/users/macbook/desktop/data/")
// })
// app.get("/style.css",(req,res)=>{
//     res.sendFile(__dirname+"/style.css");

// })


app.listen(3000);
