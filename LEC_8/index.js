const express = require('express');

const app = express()

app.get('/', (req, res) => {
  //res.send('Hello World')

//   res.sendFile(__dirname+"/index.html");

  res.json({
    Name:"Keshav",
    age:19
  })
})
//path variable
//1) query parameter
app.get("/watch",(req,res)=>{
    let videoId = req.query.v;
    let nId = req.query.n;
    res.send("id got it "+ " "+ videoId + " "+nId)
});

//2.params
app.get("/watch/:v/video/:n",(req,res)=>{
    console.log(req.params.v)
    console.log(req.params.n)
    res.send("got it !!!!!!!")
})
app.listen(3000,function(){          //3000,callback function()
    console.log("server started");
});  //server start 