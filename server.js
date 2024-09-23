//console.log("Hello");
//console.log(module);
//const data="CodeQuotient";
// const  code=require("./code")

// //data=10;

// //console.log(data);
// //log();
// console.log(code.data);
// code.log();
// const code=require("./code");
// //const EventEmitter =require("events");
// //const evt=new EventEmitter();
// code.evt.on("message",()=>{
//     console.log("User event handled");

// })
// code.log();

// const Logger=require("./code");
// const logger=new Logger();
// logger.on("message",()=>{
//     console.log("Log called");
// })
// logger.log();
const http=require("http");
const fs=require("fs");

const server=http.createServer(processRequest);
function processRequest(req,res){
   // console.log("A Req Rec.")
   res.setHeader("content-type","text/html")
//console.log(req.url);
if(req.url=="/" || req.url=="/index.html")
{
 //   res.write("Home Page")
    fs.readFile("./index.html","utf-8",(err,data)=>{
        if(err)
            res.write("Error in reading page");
        else
        res.write(data);
    res.end();

    })
    // let data=fs.readFileSync("./index.html");
    // res.write(data);
    // res.end();

}
else if (req.url=="/about.html"|| req.url=="/about")
{
   // res.write ("About us page");

//res.write("Welcome to <b>nodejs</b> page "+req.url)
   //res.end();
   fs.readFile("./about.html","utf-8",(err,data)=>{
    if(err)
        res.write("Error in reading page");
    else
    res.write(data);
res.end();

})
}
else
res.end();

}
server.listen(3000);
// server.on("connection",(socket)=>{
//     console.log("A Request rec.")
// })