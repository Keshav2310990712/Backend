const express= require("express");
const { m1, m2 } = require("./middleware/firstmiddleware");
const { m3,m4,m5 } = require("./middleware/pathlevel");
const app = express();
const router = require("./route/userroute")
app.use(express.static(__dirname+"/public"))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(m1)
// app.use(m2)
//middleware level middleware(app.use(middleware)) -- 
//middleware will run in order the way it is called
//next() or return is not same 
app.use("/api/users",router)
app.get("/health",m3,(req,res,next)=>{
    console.log("running comntroller function");
    // next()
    return res.json({
        status:"ok",
        message:"server running ok"

    })
    console.log("after response")
})
app.use(m2)
app.get("/home",(req,res,next)=>{
    console.log("running from endpoint....");
    res.json({
        success:true,
        message:"welocme to home page"
    })
})

app.listen(2500,()=>{
    console.log("server initiated");
})