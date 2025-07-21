const fs = require("fs");
fs.readFile("../users.txt","utf-8",function(err,data){
    if(err) return console.log(err)
       // console.log(data[0]);
    //json.stringify is used to convert object to string
    //json.parse is used to convert string to object back
    let users = JSON.parse(data);

   fs.readFile("../file2.txt","utf-8",function(err,data1){
       if(err) return console.log(err)
          // console.log(data[0]);
       //json.stringify is used to convert object to string
       //json.parse is used to convert string to object back
       let users1 = JSON.parse(data1);
       let newarr=[...users,...users1];
       fs.writeFile("../result.txt",JSON.stringify(newarr),function(err){
           if(err) return console.log(err)
               console.log("result file written")
       })
   })
})