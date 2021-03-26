const exp=require("express");
const userApiObj=exp.Router();

const asyncHandler=require("express-async-handler")

//extract body of req obj
userApiObj.use(exp.json());

//import bcrypt
const bcryptjs=require("bcryptjs");

//import cloudinary
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary")
const multer=require("multer")


//coudinary configuration
cloudinary.config({
    cloud_name:'degojbpfy',
    api_key:'317337362233278',
    api_secret: 'C2y3Bl3f_nujcqgFd0im0UohNHE'
    });

//cloudinary storage configuration
const storage = new CloudinaryStorage({
     cloudinary: cloudinary, 
     params:async (req, file) => {
          return { 
              folder: 'bookstore',
               public_id: file.fieldname + '-' + Date.now() 
            }}
        });

//multer middleware configuation
var upload = multer({ storage: storage });




//const jwt=require("jsonwebtoken")

//post req handler for user register
userApiObj.post("/register",upload.single('photo'), asyncHandler(async(req,res,next)=>{
    //get user collection object
    let userCollectionObj = req.app.get("userCollectionObj");
   
   
    let userObj =  JSON.parse(req.body.userObj)
    //let userObj = req.body;
    
    //check for user in db
    let user = await userCollectionObj.findOne({username:userObj.username});

    //if username alreaddy taken
    if(user!==null){
        res.send({message:"user existed"});
    }
    else{
        //console.log("user not there")
        //hash the password
        let hashedpwd = await bcryptjs.hash(userObj.password,6);

        //replace plain txt pswdd with hashed pswd
        userObj.password = hashedpwd;
        userObj.productImgLink = req.file.path;

        console.log(userObj)

        //create user
        let success=await userCollectionObj.insertOne(userObj);
        res.send({message:"user created"})
        console.log("user created")
       
       
    }
   //console.log("user obj is",req.body);
}))


//export
module.exports = userApiObj;