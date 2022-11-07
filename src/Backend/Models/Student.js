
const mongoose = require("mongoose")
const Infouser = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    number: {
        type: String,
        required: true,
        minlength: [10, "Enter Valid Number"],
        maxlength: [10, "Enter Valid Number"],
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: [8, "Password must be Greater than 8 characters"]
    },
    ID: {
        type: String,
        required: true,
        minlength: [7, "Enter Valid Number"],
        maxlength: [7, "Enter Valid Number"],
        unique: true
    },
    Batch: {
        type: String,
        required: true,
        minlength: [4, "Enter Valid Year"],
        maxlength: [4, "Enter Valid Year"]
    },
    Address: {
        type: String,
        default :' '
    },

    Curr_loc: {
        type: String,
        default :' '
    },
    Passyear: {
        type: String,
        default :' '
    },
    Job_role: {
        type: String,
        default :' '
    },
    company: {
        type: String,
        default :' '
    },

   Designation:{
    type:String,
    default :' '
   },
   Work_Ind:{
    type:String,
    default :' '
   },
   Branch:{
    type:String,
    default :' '
   },
    Interest:{
     type:String,
     default :' '   
    },
    Image:{
        type:String,
        default :'profiledefault.png'
    },
    DOB:{
        type:String,
        default :' '
    },
   userType:{
       type:String
   },
   Workshop:{
       type:String,
       default : "yes"
   },
   Lecture:{
       type:String,
       default:"yes"
   },
     state : {
        type:Boolean,
        default : false
    },
    verifytoken :{
        type : String
    },
    AppliedJobs :[{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Info",
        unique: true
    }]
})

//Create Model

const User = mongoose.model("Info", Infouser);

module.exports = User;