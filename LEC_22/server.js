const express = require("express");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const app = express();
const User = require("./model/users");
console.log(User)
app.use(express.json());
app.use(express.urlencoded({extended:true}))
function isLogin(req,res,next){
    if(!req.headers.authorization){
        res.json({
            success:false,
            message:"no authorisation key provided"
        })
    }
    let token = req.headers.authorization
    console.log(token);
    if(!token){
        return res.json({
            success:false,
            message:"please login"
        })
    }
    let decode = jwt.verify(token,"okkkkk")
    console.log(decode)
    if(!decode){
        return res.json({
            success:false,
            message:"Invalid token"
        })
    }
    req.user = decode.user;
    next()
}
app.get("/health",(req,res)=>{
    res.json({
        status:"ok",
        message:"server running ok"
    })
})

app.get("/home",isLogin,(req,res)=>{
    
    let username=req.user.name
    res.json({
        success:true,
        message:"welcome" + username
    })
})
//end point for signup -- adding new user to database     
app.post("/api/users/signup",async(req,res)=>{
    try{
    let {name,email,password} = req.body;
    let userExist = await User.findOne({email:email})
    if(userExist){
        return res.json({
            success:false,
            message:"user already exist with this email please login"
        })
    }
    let newUser = new User({
        name:name,
        email:email,
        password:password
    })
    await newUser.save()
    res.json({
        success:true,
        message:"user registered successfully,please login to continue"
    })
} catch (error){
    console.log(error.message);
    res.json({
        error:{
            message:error.message
        }
    })
}
})
app.post("/api/auth/login",async(req,res)=>{
    try{
    const {email,password} = req.body;
    let userExist = await User.findOne({email:email})
    if(!userExist){
        return res.json({
            success:false,
            message:"user doesnot exist please signup"
        })
    }
    if(userExist.password!=password){
        res.json({
            success:false,
            message:"Invalid password please try again"
        })
        
    }
    if(userExist.password==password){
        let token = jwt.sign({"user":userExist},"okkkkk")
        return res.json({
            success:true,
            message:"Login successfully",
            token:token
        })
    }}
    catch(error){
        console.log(error);
        res.json({
            error:{
                message:error.message
            }
        })
    }
})
app.listen(3000,()=>{
    console.log("server started");
})
mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  .then(() => console.log('Connected!'));
  