const fs = require("fs");

process.argv.shift()
process.argv.shift()

let str=process.argv.toString().replace(/,/g,"\n");

fs.writeFile("../bfile.txt",str,function(err,data){
    if(err) return console.log(err)
        console.log("file created with given str");
})