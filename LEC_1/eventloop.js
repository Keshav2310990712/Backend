const fs = require("fs");
console.log("start");
setTimeout(()=>{
    console.log("timer callback")          //expired timer 
},0)
setImmediate(()=>{
    console.log("set immediate callback")    //calling phase k baad run hota hai
})
function dosometask(){
    return new Promise((resolve,reject)=>{
        resolve("promise chla")
    })
}
fs.readFile("demo.txt",(data)=>{
    console.log("poll phase callback");
    setTimeout(()=>{
        console.log("timer 2")
    },0)
    setImmediate(()=>{
        console.log("immd 2")
    })
})
console.log("end")
dosometask().then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
process.nextTick(()=>{
    console.log("next tick")
})


