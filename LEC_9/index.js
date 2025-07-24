
const express = require("express");
const app = express();
app.use(express.json());
const fs=require('fs')

app.get("/", (req, res) => {
    res.send("This is GET /watch/cars route");
});

//const bodyParser = require("body-parser");


app.post("/watch/cars",(req,res)=>{
    // res.send("YEHHHH");
    console.log(req.body);
    let name = req.body.name;
    let brand = req.body.brand;

    // res.json({
    //     name:name,
    //     brand:brand
    // })
    //array bnaya
    let userdata = {name,brand};

    fs.readFile("file.txt","utf-8",function(err,data){
        let alluser=[];
        if(err) return res.json({
            error:err
        })
        if(data && data.length>0){
            alluser = JSON.parse(data)
        }
        alluser.push(userdata);
        fs.writeFile("file.txt",JSON.stringify(alluser),function(err){
            if(err) return res.send(err);
            res.send("data added");
        })
    })
 
})
app.listen(3000,function(){
    console.log("server initiated")
})