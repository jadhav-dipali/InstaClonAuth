const express = require("express");
const router = new express.Router();
const Posts = require("../model/Insta")
const multer = require("multer")
const cloudinary = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
 const env = require("dotenv").config();
const SECRATE_KEY = process.env.SECRATE_KEY
const jwt = require("jsonwebtoken");

cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.API_KEY,
  api_secret:process.env.API_SECRET
})
// ************************get all Posts***************************
router.get("/post" ,async(req,res)=>{
  try{
    if(req.headers.authorization){
      let readData = await Posts.find();
      res.json(readData); 
    }else{
      res.status(401).json({message:"unothorised"})
    }
 
  }catch(err){
    res.status(400).json({message:"cant read Data"})
  }
});




// ****************use multer for add images***********************
const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: 'InstaClone Images',
  },
});
const upload =  multer({
  storage:storage
})
const middleware = upload.single("file");



// ****************post the whole data on DataBase********************

router.post("/post",middleware,async(req,res)=>{
    try{
      if(req.headers.authorization){
         let userVar = await jwt.verify(req.headers.authorization , SECRATE_KEY);
         if(userVar){
          const data = new Posts({file:{
            url:req.file.path,
            imageId:req.file.filename
           },userId:userVar._id,...req.body});
           const createData = await data.save();
           res.status(201).json(createData);
          }
         }
         else{
          res.status(401).json({message:"User Not Othorised"})
        }
      }catch(err){
        res.status(400).json({message:"post is not created"})
       }
   
})



module.exports = router;