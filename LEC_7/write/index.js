let users = [
    {
        name : "Keshav",
        age : "19",
        address : "Sangrur"
    },
    {
        name : "Kansal" , 
        age : "21",
        address : "Punjab"
    }
]
const fs = require("fs");
//fs.writeFile("../users.txt",users.toString(),function(err) - but we will pass data in form of json
fs.writeFile("../users.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err)
        console.log("users written")
})


