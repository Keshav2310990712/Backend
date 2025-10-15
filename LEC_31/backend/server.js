const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8015 });
//event-handler 


// wss.on("connection",function(socket){
//     console.log("USER CONNECTED");
//     socket.on("message",function(message){
//         console.log("message received "+" "+message.toString())
//         if(message.toString()==="ping"){
//         socket.send("pong")
//         }
//     })
// })
     


//broadcasting  
let allSocket=[]  
wss.on("connection",function(socket){
    console.log("USER CONNECTED");
    allSocket.push(socket);
    socket.on("message",function(message){
        console.log("message received "+" "+message.toString())
        allSocket.forEach((s)=>{
            s.send(message.toString())
        })
        
    })
})