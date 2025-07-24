const express = require("express");
const app = express();
const fs=require('fs')

app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html");
// })
// app.get("/about",(req,res)=>{
//     res.sendFile(__dirname+"/about.html");
// })
app.post('/users',(req,res)=>{
    //userid username
    let username=req.body.username;
    let password=req.body.password
    // res.json({username,password})
    let userdata={username,password};
   fs.readFile("a.txt","utf-8",function(err,data){
    let arr=[];
    if(!err&&data!=""){
        arr=JSON.parse(data);
    }
    arr.push(userdata);
    fs.writeFile("a.txt",JSON.stringify(arr),function(err,data){
        if(err)return res.send(err)
            res.send("data added")
        })
})
})
app.listen(2500,function(){
    console.log("server initiated")
})