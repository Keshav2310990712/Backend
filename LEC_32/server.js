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
// let allSocket=[]  
// wss.on("connection",function(socket){
//     console.log("USER CONNECTED");
//     allSocket.push(socket);
//     socket.on("message",function(message){
//         console.log("message received "+" "+message.toString())
//         allSocket.forEach((s)=>{
//             s.send(message.toString())
//         })
        
//     })
// })


let rooms = new Map();

{
    "xyz":[s1,s2],
    "1234":[s2,s3,s4];
}

function m1(req,res){
    req.userId
}

wss.on("connection",function(socket){
    console.log("A NEW USER CONNECTED");
    socket.on("message",function(message){
        let parsedMessage= JSON.parse(message);
        let {type,payload} = parsedMessage;
        if(type=="join"){
            let {roomId} = payload;
            if(!rooms.get(roomId)){
                rooms.set(roomId,new Set())
            }
            rooms.get(roomId).add(socket);
            console.log(rooms);
            socket.roomId = roomId;
            socket.send("added to room");   
        }

        else if(type==="chat"){
            let {message} = payload;
            let {roomId} = socket;
            let allClients = rooms.get(roomId);
            allClients.forEach(s => {
                s.send(message);
            });

        }
        else if(type==="create")
    })
})