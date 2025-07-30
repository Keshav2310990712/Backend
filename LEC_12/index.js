let button = document.querySelector("#btn");
let box = document.querySelector(".box");

let colors = ["red","black","blue","green","orange","brown","yellow","purple","pink","grey"]
function randomcolor(){
    let index=Math.floor(Math.random()*10)
    let color = colors[index];
    return color;
}
let intervalId=null;
button.addEventListener("click",function(){
    // let color = randomcolor();
    // box.style.backgroundColor = color;

    intervalId= setInterval(()=>{
        let color = randomcolor()
        box.style.backgroundColor = color;
    },500)
})

let stop = document.getElementById("stop");
stop.addEventListener("click",function(){
    if(intervalId){
        clearInterval(intervalId)
    }
})