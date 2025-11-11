let {createClient} = require("redis");
let client = createClient();

async function notify(){
    await client.SUBSCRIBE("notify_me",(message)=>{
        console.log(message);
    })
}

 setTimeout(()=>{
    notify()
 },2000)


client.connect()
.then(()=>console.log("redis connected"))
