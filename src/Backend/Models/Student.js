
const mongoose = require("mongoose")
const Infouser = new mongoose.Schema({
    name : {
        type:String,
        required : true,
        
    },
    number : {
        type:String,
        required:true,
        minlength : [10,"Enter Valid Number"],
        maxlength : [10,"Enter Valid Number"],
        unique:true
    },
    email :{ 
         type:String,
         required:true,
         unique:true },

    password : {
       type: String,
       required:true,
       minlength : [8,"Password must be Greater than 8 characters"]
    },
    ID :{
        type:String,
        required:true,
        minlength : [7,"Enter Valid Number"],
        maxlength : [7,"Enter Valid Number"],
        unique:true
    },
    Batch :{
        type:String,
        required:true,
        minlength : [4,"Enter Valid Year"],
        maxlength : [4,"Enter Valid Year"]
    },
     state : {
        type:Boolean,
        default : false
    },
    verifytoken :{
        type : String
    }
 })
 
 //Create Model
 
 const User = new mongoose.model("Info",Infouser);

 module.exports = User;