function buyProduct(product_Name,cb){
    //do some asynchronous operation
    setTimeout(()=>{
        //all the operation completed 
        cb();
    })
}

// buyProduct("Iphone 16",function(){
//     console.log("product is purchased")
// })

function buyProduct(product_Name,cb){
    //do some asynchronous operation

    let isProduct=product.filter((p)=> p.name==product_Name)[0]
    if(!isProduct){
        return cb("product is not available ",null)
    }
    cb(null,isProduct.amount);
    
}

let product=[{
    name:"samsung",
    amount:70000,
    quantity:10
},
{
    name:"IPhone 16",
    amount:100000,
    quantity:0
}]

let availableamount = 200000
function deductbankAmount(amount,cb){
       //do some Tramsactions 
        if(amount>availableamount){
            cb("Bank balance is low",null)
        }
        else{
            availableamount-=amount;
            console.log(availableamount)
            cb(null,"amount deducted")
        }


}
buyProduct("IPhone 16",function(err,amount){
    if(err) return console.log(err);
    console.log(amount);
    deductbankAmount(amount,function(err,message){
        if(err) return console.log(err);
            console.log(message);
    })
})

const fs = require("fs");

fs.readFile("filepath","utf-8",(err,data)=>{
    
})