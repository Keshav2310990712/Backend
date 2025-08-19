const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const Blogs = require("./model/user")
// Step 1 => Server create 
const UserModel = require("./model/user2");
const user = require("./model/user2"); // Model import
// Body parser middleware
app.post("/blogs",async (req,res)=>{
    let {title,body,userId} = req.body;
   // console.log(title,body);
   let userExists = await UserModel.findById(userId);
   if(userExists){
   let newBlog = new Blogs({
    title:title,
    body:body,
    date: Date.now(),
    userId:userId  
   })
   await newBlog.save();
   userExists.blogs.push(newBlog._id)
   await userExists.save();
   res.json({
    success:true,
    data:newBlog,
    message:"blog added successfully"
   })
}
})
app.get('/blogs',async(req,res)=>{
    let allblogs =await Blogs.find(); 
    res.json({
        success:true,
        data :allblogs
    })
})
app.get("/blogs/:id",async(req,res)=>{
    let {id} = req.params
    let blog = await Blogs.findOne({_id:id});
    res.json({
        success:true,
        data:blog
    })
})
// //mongodb store data in form of bson
// //mongoose is odm(object document mapping)

// //hw -  user schema bnana haii email username passwd include kro 
// // user add krna hai route get all user , aingle user get 



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

app.get("/user/:id",async(req,res)=>{
    let {id} = req.params
    let user = await UserModel.findOne({_id:id}).populate("blogs");
    if(user){
    res.json({
        success:true,
        data:user
    }) }
})

//delete blog
app.delete("/blogs/:blogId",async(req,res)=>{
    let {blogId} = req.params;
    let {userId} = req.body;
    let blogExist = await Blogs.findById(blogId); 
    if(!blogExist) return res.json({
        success:false,
        message:"Blog doesnt exists"
    })
    if(blogExist.userId!=userId) return res.json({
        success:false,
        message:"You are not allowed to delete this blog"
    })
    await Blogs.findByIdAndDelete(blogId);
    let userExist = await user.findById(userId);
    let blog = userExist.blogs.filter((id)=> id!=blogId)
    userExist.blogs = blog
    await userExist.save();
    res.json({
        success:true,
        message:"blog deleted successfully",
        data:userExist
    })
})
app.listen(7000, () => {
    console.log("Server running on port 7000");
});
mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
    .then(() => console.log('Connected to MongoDB!'))