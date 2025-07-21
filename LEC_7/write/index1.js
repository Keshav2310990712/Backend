

let people=[
    {
        name:"keshav",
        age:20,
        course:"cse"
    },
    {
        name:"vamika",
        age:20,
        course:"cse"
    }
]
const fs = require("fs");

fs.writeFile("../file2.txt",JSON.stringify(people),function(err){
    if(err) return console.log(err)
        console.log("file2 is created successfully")
})