const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8015 });
//event-handler 
wss.on("connection",function(socket){
    console.log(socket);
    setInterval(()=>{
        socket.send("RELIANCE STOCK PRICE IS"+Math.random())
    },500)
    socket.on('message', function message(data) {
        console.log(data.toString());
});
    
})

//app.get("/",(req,res)=>{})