const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const user = require("./model/user.schema");

app.post("/api/users/register",async (req,res)=>{
    let {name,email,password} = req.body;
    let userExist = await user.findOne({email});     //mock
    if(userExist){
       
            return res.json({
                success:false,
                message:"user already exist"
            })
      
    }
    let newUser = await user.create({   //mock
        name:name,
        email:email,
        password:password 
    })
    // await newUser.save();
    res.json({
        success:true,
        message:"user registered successfully",
        data:newUser
    })
})
module.exports=app;