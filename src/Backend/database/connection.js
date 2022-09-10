

const express = require('express');
const cors = require('child_process')
var mongoose = require('mongoose');

const app = express()
// app.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/Alumini")
.then(() => console.log("Connection successfull...."))
.catch((err) => console.log(err));


//LogIn



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