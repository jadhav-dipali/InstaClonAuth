const express = require("express");
const router = new express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Register = require("../model/register");
const env = require("dotenv").config();
const SECREATE_KEY = process.env.SECRATE_KEY;
const multer = require("multer")
const cloudinary = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');


cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
  })


  const storage = new CloudinaryStorage({
    cloudinary: cloudinary.v2,
    params: {
      folder: 'InstaClone Images',
    },
  });
  const upload =  multer({
    storage:storage
  })
  const middleware = upload.single("image");



router.post("/register", async(req, res)=>{
    try {
        const strongpass = await bcrypt.hash(req.body.password , 10);
        const data = new Register({password:strongpass,name:req.body.name, email:req.body.email});
        const createData = await data.save();
        res.status(201).send({status:"sucusess", data:createData});
    } catch (error) {
        res.status(400).json({message:error.message})
}
})

router.get("/register" , async(req, res)=>{
    try {
        let data = await Register.find();
        res.send(data);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

router.patch("/register/:id" , middleware,async(req, res)=>{
try {
    const _id = req.params.id;
    const updatedData = await Register.findByIdAndUpdate(_id , {image:{
        url:req.file.path,
        imageId:req.file.filename
       }} , {new:true})
    res.json({status:"dp sucess" , ...updatedData});
} catch (error) {
    res.status(400).json({message:error.message})   
}
})

router.post("/login" , async(req, res)=>{
    try {
        let user = await Register.findOne({email:req.body.email})
        if(user){
           const matchpass = await bcrypt.compare(req.body.password,user.password);
          
           if(matchpass){
            const token = await jwt.sign({_id:user._id }, SECREATE_KEY);
            res.status(201).json({status:"Login sucessfully",token:token , name:user.name});
           
           }else{
            res.status(401).json({message:"Please Enater Valid Details"})
           }
        }else{
            res.status(401).json({message:"User Not Found"})
        }
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})


module.exports = router