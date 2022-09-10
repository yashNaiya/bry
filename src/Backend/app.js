const express = require("express");
const app = express();
require("./database/connection")
const User = require("./Models/Student")

app.use(express.urlencoded({extended: true})); 
app.use(express.json());




//Log In Post Method

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
    // res.send("Hello From Other Side")
   const {name, email, password, number,ID,rePass,batch} = req.body
//    console.log(req.body)

   User.findOne({email:email},(err,user)=>{
   if(user){
       console.log("Registerd already")
       res.send({message:"User Already registered"})
   }else{
       const user = new User({
           name:name[0],
           number:number[0],
           email:email[0],
           password:password[0],
           ID:ID[0],
           Batch:batch[0],
           rePass:rePass[0]
           
       })
       user.save(err =>{
           if(err){
            //   console.log(err)
            // console.log("Hello")
                 res.send(err)
           }
           else{
            //    console.log(req.body)
               res.send({message:"Successfully Registration"})
               
           }
       })
   }

   })
   
   
})



// Get Data At Port
app.get("/register",async(req,res)=>{
    try{
        const usersData = await User.find({state:"false"});
        // usersData = usersData.pretty();
        res.send(usersData);

    }catch(e){
        res.send(e)
    }
})

//Get One Student Data
app.get("/register/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const OneUserData = await User.findById(_id);
        //  console.log(OneUserData)
        if(!OneUserData){
            return res.status(404).send();
        }
        else{
            res.send(OneUserData);
        }
    }
    catch(e){
        res.send(e);
    }
})

app.listen(9002,()=>{
   console.log("Be Started at port 9002")
})