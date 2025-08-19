function m3(req,res,next){
    console.log("running middleware3")
    next();
}
function m4(req,res,next){
    console.log("running middleware4")
    next();
}
function m5(req,res,next){
    console.log("running middleware5")
    next();
}
module.exports.m3 = m3;
module.exports.m4 = m4;
module.exports.m5 = m5;