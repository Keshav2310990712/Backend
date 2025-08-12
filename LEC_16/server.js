// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
//const Blogs = require("./model/user")

// app.post("/blogs",async (req,res)=>{
//     let {title,body} = req.body;
//    // console.log(title,body);
//    let newBlog = new Blogs({
//     title:title,
//     body:body,
//     date: Date.now()  
//    })
//    await newBlog.save();
//    res.json({
//     success:true,
//     data:newBlog,
//     message:"blog added successfully"
//    })
// })
// app.get('/blogs',async(req,res)=>{
//     let allblogs =await Blogs.find(); 
//     res.json({
//         success:true,
//         data :allblogs
//     })
// })
// app.get("/blogs/:id",async(req,res)=>{
//     let {id} = req.params
//     let blog = await Blogs.findOne({_id:id});
//     res.json({
//         success:true,
//         data:blog
//     })
// })
// app.listen(3000,()=>{
//     console.log("server initiated");
// })
// mongoose.connect('mongodb://127.0.0.1:27017/test')
//   .then(() => console.log('Connected!'));
// //mongodb store data in form of bson
// //mongoose is odm(object document mapping)



// //hw -  user schema bnana haii email username passwd include kro 
// // user add krna hai route get all user , aingle user get 


// Step 1 => Server create 
const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./model/user2"); // Model import
const app = express();
// Body parser middleware
app.use(express.json()); // JSON request parse karega
app.use(express.urlencoded({ extended: true })); // form-data parse karega
// Post username, email, password to localhost/url [User add]
app.post("/user", async (req, res) => {
        let { username, email, password } = req.body; // destructure sabhi fields
        let newUser = new UserModel({
            username: username,
            email: email,
            password: password
        });
        await newUser.save();
        res.json({
            success: true,
            data: newUser,
            message: "User added successfully"
        });
});

app.get('/user',async(req,res)=>{
    let allUser =await UserModel.find(); 
    res.json({
        success:true,
        data :allUser
    })
})

app.get("/usser/:id",async(req,res)=>{
    let {id} = req.params
    let user = await UserModel.findOne({_id:id});
    res.json({
        success:true,
        data:allUser
    })
})

app.listen(7000, () => {
    console.log("Server running on port 7000");
});
mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
    .then(() => console.log('Connected to MongoDB!'))