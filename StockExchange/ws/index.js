const {WebSocketServer}=require('ws')
let {subscriber}=require('../shared/index')
const wss=new WebSocketServer({port:8080});
let allSocket=[];
wss.on("connection",function connection(ws){
    ws.on('error',console.error);
   
    allSocket.push();
    (async function orderbookUpdate(){
        await subscriber.connect()
   await subscriber.SUBSCRIBE("bookupdate",(message)=>{
    //broadcasting
    let parsedMessage=JSON.parse(message)
    // console.log(parsedMessage)
    broadcast(JSON.stringify(parsedMessage))
    })
})()
})
//IIFE--immediately invoking function
function broadcast(message){
    allSocket.forEach((s)=>{
        let data = JSON.stringify(message);
        s.send(data)
        // s.send(message
    })
}