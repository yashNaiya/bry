const express = require("express");
const app = express();
require("./database/connection")
const User = require("./Models/Student")

const bodyParser = require("body-parser");
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

const path = require("path");  
app.use("/images", express.static(path.join("Upload/images")));  

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
const keysecret = '8wliueinmuyswoi90nhhjgdfdfkuasakjfhdkjfhds8908987'

//forgot Password
const crypto = require("crypto");
var jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const { appBarClasses } = require("@mui/material");

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:'BVMAlumini1020',
        pass:'rpratpmgdxtspmdl'
    }
}) 


//multer store Image
const multer = require("multer")

var storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
       cb(null, './Upload/images');    
    }, 
    filename: function (req, file, cb) { 
       cb(null , Date.now()+'_'+file.originalname);   
    }
 });

 var upload = multer({ storage: storage })


//Log In Post Method

app.post("/login",(req,res)=>{
    const {email,password} = req.body
   //  console.log(req.body)
    User.findOne({email:email,state:true},(err,user) =>{
      if(user){
          if(password[0] === user.password){
      
           // console.log("LogIn Sucessful")
           res.send({message:"LogIn Sucessful",user,state:1})
          }
          else{
           //  console.log("Password Did Not Match")
          
           res.send({message:"Password Did Not Match",state:0})
          }
      }else{
       //    console.log("User Not Registered")
          res.send({message:"User Not Registered",state:0})
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
app.get("/register/valid",async(req,res)=>{
    try{
        const usersData = await User.find({state:"true"});
        // usersData = usersData.pretty();
        res.send(usersData);

    }catch(e){
        res.send(e)
    }
})

//Get One Student Data
app.get("/register/:email",async (req,res)=>{
    try{
        
        const email = req.params.email;
        const OneUserData = await User.findOne({email,email});
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


//Set State of Student to true
app.patch("/register/update/:ID/:email",async (req,res)=>{
    try{
        // console.log(req.params)
        const _id = req.params.ID;
        const email = req.params.email;
        // console.log(_id)
        // console.log(req.body)
        const OneUserDataStateUpdate = await User.findOneAndUpdate({ID:_id},{state:"true"},{
            new:true
        }) ;
        // console.log(OneUserDataStateUpdate)
        if(!OneUserDataStateUpdate){
            return res.status(404).send();
        }
        else{
            const mailOptions = {
                from:'BVMAlumini1020',
                to:email,
                subject:"Successful Registration",
                text: "Your Request to Register In our Website is accepted"
            }
            
            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    console.log("error",error);
                    res.status(401).json({status:401,message:"email not send"})
                }else{
                    console.log("Email sent",info.response);
                    res.status(201).json({status:201,message:"Email sent Succsfully"})
                    res.send({message:"User is Added"});
                }
            })

           
        }
    }
    catch(e){
        res.send(e);
    }
})


//Delete Student From Database
app.delete("/register/Delete/:ID",async (req,res)=>{
    try{
        // console.log(req.params)
        const _id = req.params.ID;
        const OneUserDataDelete = await User.findOneAndDelete({ID:_id}) ;
        //   console.log(OneUserDataDelete)
        if(!OneUserDataDelete){
            return res.status(404).send();
        }
        else{
            res.send({message:"User is Deleted"});
        }
    }
    catch(e){
        res.send(e);
    }
})


//forgot Password get token send email
app.post('/forgotpass',async (req,res)=>{
    // console.log(req.body)

    const {email} = req.body;

    if(!email){
        res.status(401).json({status:401,message:"Enter Your Email"})
    }

    try {
        const userfind = await User.findOne({email:email});
        if(!userfind){
            // console.log("Hello")
            res.status(201).json({status:201,message:"User Not Found"})
        }
        else{
        // console.log(userfind)
        //  console.log(keysecret)
        // token generate for reset password
        const token = jwt.sign({_id:userfind._id},keysecret,{
            expiresIn:"2h"
        });
        
        const setusertoken = await User.findByIdAndUpdate({_id:userfind._id},{verifytoken:token},{new:true});
        // console.log(setusertoken)
        
        const Link = `http://localhost:9002/forgotpass/${userfind.id}/${setusertoken.verifytoken}`
        // console.log("Hello")
        if(setusertoken){
            const mailOptions = {
                from:'BVMAlumini1020',
                to:email,
                subject:"Sending Email For password Reset",
                text:`This Link Valid For 2 MINUTES http://localhost:3000/forgotpass/${userfind.id}/${setusertoken.verifytoken}`
            }
            
            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    console.log("error",error);
                    res.status(401).json({status:401,message:"email not send"})
                }else{
                    console.log("Email sent",info.response);
                    res.status(201).json({status:201,message:"Email sent Succsfully"})
                }
            })

        }
    }

    } catch (error) {
        res.status(401).json({status:401,message:"invalid user"})
    }
        
    

})

app.get("/forgotpass/:id/:token",async(req,res)=>{
     const {id,token} = req.params;

    try {
        const validuser = await User.findOne({_id:id,verifytoken:token});
        
        const verifyToken = jwt.verify(token,keysecret);
          
        // console.log(verifyToken)

        //verifyToken will verify that token time is not expired
        //If token time is expired it will not verify

        if(validuser && verifyToken._id){
            res.status(201).json({status:201,validuser})
        }else{
            res.status(401).json({status:401,message:"user not exist"})
        }

    } catch (error) {
        res.status(401).json({status:401,error})
    }
});

//UpdateUserPassword

app.post("/ResetPassword/:id",async(req,res) =>{
    try{
      _ID = req.params.id
      pass = req.body.password
      const UserpassUpdate = await User.findByIdAndUpdate(_ID,{password:pass[0]})
    //   console.log(UserpassUpdate)
      if(!UserpassUpdate){
        return res.status(404).send(); }
    else{
        res.send({message:"Password Is Updated"}); }

    }
    catch(e){
        res.send(e)
    }
      
})

app.post("/UpdateProfile", async(req,res) => {
    // console.log(req.body)
    try{
    const _ID = req.body._id
    const name = req.body.name.toString()
    const number = req.body.number.toString()
    const email = req.body.email.toString()
    const password = req.body.password.toString()
    const ID = req.body.ID.toString()
    const Batch = req.body.Batch.toString()
    const Address = req.body.Address.toString()
    const Branch = req.body.Branch.toString()
    const Curr_loc = req.body.Curr_loc.toString()
    const DOB = req.body.DOB.toString()
    const Passyear = req.body.Passyear.toString()
    const Work_Ind = req.body.Work_Ind.toString()
    const company = req.body.company.toString()
    const Job_role = req.body.Job_role.toString()
    const Designation = req.body.Designation.toString()
    const Interest = req.body.Interest.toString()
    const Workshop = req.body.Workshop.toString()
    const Lecture = req.body.Lecture.toString()
    // console.log(req.body)
    // console.log(_ID)

    const Updateprofile = await User.findByIdAndUpdate({_id:_ID},{$set:{name:name,number:number,email:email,password:password
        ,ID:ID,Batch:Batch,Address:Address,Branch:Branch,Curr_loc:Curr_loc,DOB:DOB,Passyear:Passyear,Work_Ind:Work_Ind,
        company:company,Job_role:Job_role,Designation:Designation,Interest:Interest,Workshop:Workshop,Lecture:Lecture}})
   
    // console.log(Updateprofile)

    if(!Updateprofile){
        return res.status(404).send(); }
    else{
        res.send({message:"Profile Is Updated"}); }

    }
    catch(e){
        res.send(e)
    }

})

app.post("/UploadPhoto",upload.single("photo"), async(req,res) => {
    // console.log("Hello")
    //  console.log(req.file)
    if(req.file!=undefined){
     const imagename = req.file.filename
     const ID = req.body.ID
    //  console.log(imagename)
    //  console.log(req.body)
     const UpdateImage = await User.findByIdAndUpdate({_id:ID},{$set:{Image:imagename}})
    }
   
     
})




app.listen(9002,()=>{
   console.log("Be Started at port 9002")
})