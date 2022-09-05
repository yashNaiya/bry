

const express = require('express');
const cors = require('child_process')
var mongoose = require('mongoose');
const { default: userEvent } = require('@testing-library/user-event');
const { Alert } = require('@mui/material');
const { TurnedIn } = require('@mui/icons-material');

const app = express()
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
// app.use(cors());



mongoose.connect("mongodb://0.0.0.0:27017/Alumini")
.then(() => console.log("Connection successfull...."))
.catch((err) => console.log(err));

const Infouser = new mongoose.Schema({
    name : {
        type:String,
        required : true,
        
    },
    number : {
        type:String,
        required:true,
        minlength : [10,"Enter Valid Number"],
        maxlength : [10,"Enter Valid Number"]
    },
    email :{ 
         type:String,
         required:true,
         unique:true },

    password : {
       type: String,
       required:true,
       minlength : [8,"Password must be Greater than 8 characters"]
    }
    
    ,
     state : {
        type:Boolean,
        default : false
    }
 
 })
 
 //Create Model
 
 const User = new mongoose.model("Info",Infouser);

//LogIn


app.post("/login",(req,res)=>{
     const {email,password} = req.body
    //  console.log(req.body)
     User.findOne({email:email},(err,user) =>{
       if(user){
           if(password[0] === user.password){
       
            // console.log("LogIn Sucessful")
            res.send({message:"LogIn Sucessful",user})
           }
           else{
            //  console.log("Password Did Not Match")
           
            res.send({message:"Password Did Not Match"})
           }
       }else{
        //    console.log("User Not Registered")
           res.send({message:"User Not Registered"})
       }

     })
})

//Registration 
app.post("/register",(req,res)=>{
    const {name,number,email,password} = req.body
    User.findOne({email:email},(err,user)=>{
    if(user){
        // console.log("Registerd already")
        res.send({message:"User Already registered"})
    }else{
        const user = new User({
            name:name[0],
            number:number[0],
            email:email[0],
            password:password[0]
        })
        user.save(err =>{
            if(err){
            //    console.log(err)
                res.send(err)
            }
            else{
                // console.log(req.body)
                res.send({message:"Successfully Registration"})
                
            }
        })
    }

    })
    
    
})





app.listen(9002,()=>{
    console.log("Be Started at port 9002")
})




//Create user Schema


// const createDocument = async() => {
//     try{
//           const first = new Info({
//            name : "Shyam",
//            number : 8238983637,
//            mail : "thakorshyam90@gmail.com",
//            pwd : 30092001
//             })
//            const result = await first.save();
//            //console.log(result);
//     }catch(err){
//         console.log(err);
//     }

// }

// createDocument();