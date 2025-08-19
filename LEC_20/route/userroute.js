const express = require("express");
const router = express.Router();
const {m5}= require("../middleware/pathlevel")
router.use(m5)
router.post("/",(req,res)=>{
    res.json({
        success:true,
        message:"user added successfully"
    })
})
router.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"all user data fectched succesfully"
    })
})
router.get("/:id",(req,res)=>{
    res.json({
        success:true,
        message:"one user fetched successfully"
    })
})
module.exports = router;






module.exports = router