const mongoose = require("mongoose")
const Jobs = new mongoose.Schema({
   UserID : {
    type:String,
   },
    tittle : {
        type:String,
        // required : true,
        
    },
    type : {
        type:String,
        // required : true,
        
    },
    companyName: {
        type:String,
        // required : true,
        
    },
    jobDescription : {
        type:String,
        // required : true,
        
    },
    website : {
        type:String,
        // required : true,
        
    },
    salary : {
        type:String,
        // required : true,
        
    },
    lastDate :{
        type:String,
        // require : true
    },
    WorkFromHome:{
        type:String,
        // require:true
    },
    JobLocation:{
        type:String
        // require : true
    }
    
 })
 
 //Create Model
 
 const JOBS = new mongoose.model("Jobs",Jobs);

 module.exports = JOBS;