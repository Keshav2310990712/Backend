let {createClient} = require("redis")

let publisher = createClient();
let subscriber = createClient();
// publisher.connect()
// .then(()=>console.log("connect to publisher"))
// subscriber.connect()
// .then(()=>console.log("connect to subscriber"))

module.exports={publisher,subscriber}