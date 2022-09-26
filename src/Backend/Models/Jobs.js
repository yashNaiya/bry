const mongoose = require("mongoose")
const Jobs = new mongoose.Schema({
    tittle : {
        type:String,
        required : true,
        
    },
    type : {
        type:String,
        required : true,
        
    },
    Cname : {
        type:String,
        required : true,
        
    },
    Jdes : {
        type:String,
        required : true,
        
    },
    Cweb : {
        type:String,
        required : true,
        
    },
    salary : {
        type:String,
        required : true,
        
    }

    
 })
 
 //Create Model
 
 const JOBS = new mongoose.model("Jobs",Jobs);

 module.exports = JOBS;


