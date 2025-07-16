const fs=require("fs")
//file ,data,callback
fs.writeFile("../demo.txt","g26 hello",function(err,data){
if(err) return console.log(err)
    console.log("succesfully");
})

fs.writeFile("../demo2.txt","g26 haahhahhhah",function(err,data){
    if(err) return console.log(err);
    console.log("file created successfully");
})