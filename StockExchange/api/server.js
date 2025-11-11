const express = require("express");
const app = express(); 

app.use(express.json());
const orderRoute = require("./Routes/order");
// console.log("hello")
app.use("/api/v1/order",orderRoute);

app.listen(4000, ()=> {
    console.log("server started");
})



