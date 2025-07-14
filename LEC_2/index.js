function sum(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}

//first way of moduling
// module.exports ={
//     sum,
//     sub
// }

//second way of moduling
module.exports.sum = sum;
module.exports.sub = sub;

//commonJS module system = import is done by require()
//common js - es module - import,export