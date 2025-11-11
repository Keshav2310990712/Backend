const OrderBook = require("../service/order");
let {publisher} = require("../../shared/index");
let ob = new OrderBook("BTCUSD"); //GLOBAL OBJECT
module.exports.postPlaceOrder = async (req,res)=>{
    //to create a new order for user who is placing order
let {side,type,price,quantity,user} = req.body;
let response = ob.placeOrder(side,type,price,quantity,user)
await publisher.connect()
publisher.PUBLISH("bookupdate",JSON.stringify(response.book))
res.json({
    event:"orderupdate",
    data:{
        orderRepost:response.result,
        book:response.book
    }
})
// console.log(response)
}

