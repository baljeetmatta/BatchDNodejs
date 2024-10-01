const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    "firstname":String,
    "lastname":String,
    "username":String,
    "password":String,
    "city":{
        type:String,
        default:"ABC",
        
    }

});
userSchema.virtual("Name").get(function(){
   return  this.firstname+" "+this.lastname;
})
userSchema.virtual("Name").set(function(name){
    let arr=name.split(" ")
    this.firstname=arr[0];
    this.lastname=arr[1];

})
module.exports=mongoose.model("users",userSchema);

