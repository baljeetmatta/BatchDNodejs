// const data="CodeQuotient";
// // module.exports=data;
// function log()
// {
//     console.log("Log called")
// }
// //module.exports=log;
// //module.exports=data;
// //module.exports={fun:log,data:data};
// //module.exports.fun=log;
// //module.exports.data=data;
// module.exports={data,log};
// const EventEmitter=require("events");
// //console.log(events);
// const evt =new EventEmitter();

// //evt.emit("message");
// function log()
// {
//     console.log("Working on Log...")
//     evt.emit("message")
// }
// // evt.on("message",()=>{
// //     console.log("Event handled");

// // })
// // log();
// // log();
// module.exports={log,evt};


//evt.emit("message");
const EventEmitter=require("events")
class Logger extends EventEmitter
{
    log()
    {
        console.log("Working on log...");
        this.emit("message");

    }
}
module.exports=Logger;



