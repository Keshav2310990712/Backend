const fs = require("fs");

fs.readFile("../demo.txt", "utf-8", function(err, data1) {
    if (err) return console.log(err);
    console.log(data1);

fs.readFile("../demo2.txt", "utf-8", function(err, data2) {
    if (err) return console.log(err);
    console.log(data2);

const result = data1 + data2

fs.writeFile("../result.txt", result, function(err, data) {
    if (err) return console.log(err);
    console.log("succesfull");
})
})
})           


//Assignment---part1 be3rd have folder assignment under which asign ment 1 assignment2 push krna hai fer 
// write data in file using fs module ,but input data should betaken using terminal


console.log(process.argv);


//termianl ka input process.argv se read hota hai ye ek array hai jisme terminal ki input hoti hai