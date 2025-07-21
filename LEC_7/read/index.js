const fs = require("fs");
const {read} = require("../IOperation/util")
// fs.readFile("../users.txt","utf-8",function(err,data){
//     if(err) return console.log(err)
//        // console.log(data[0]);
//     //json.stringify is used to convert object to string
//     //json.parse is used to convert string to object back
//     let users = JSON.parse(data);
//     console.log(users[0].name)
// })

async function readFile(filepath){
    let data = await read(filepath);
    console.log(data)
}
readFile("../users.txt")