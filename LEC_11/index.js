// //accessing dom elemnemt
// // 1 . using id
// // 2 . using class
// // 3 . using tag
// // 4 . querySelector/querySelectorAll
// let el1 = document.getElementById("heading1");
// console.log(el1);
// let el2 = document.getElementsByClassName("item");
// console.log(el2[0]);
// let el3 = document.getElementsByTagName('p');
// console.log(el3[1]);
// let el4 = document.querySelector("p");
// console.log(el4);
// let el5 = document.querySelector(".item");
// console.log(el5);
// let el6 = document.querySelectorAll(".item");
// console.log(el6);

// //properties = to get and set values(getter and setter)
// // innertext---
// // innerhtml---
// // textcontent---

// let ul = document.querySelector("#container");
// // let data = el4.innerText;
// // console.log(data);
// el4.innerText="changed using js"
// let data = el4.innerText;
// console.log(data);
// let data2 = ul.innerHTML;
// let data3 = ul.innerText;
// let data4 = ul.textContent;
// console.log(data2);
// console.log(data3);
// console.log(data4);
// ul.innerHTML = ` <li class="item">item4</li>
//         <li class="item">item2</li>
//         <li class="item">item3</li> `


// //getAttribute
// //setAttribute
// //classList        

// console.dir(el5.getAttribute("id"))
// console.log(el5.getAttribute("class"))
// el5.setAttribute("id","js");
// console.log(el5.getAttribute("id"))
// console.dir(el5.classList);
// console.dir(el1.classList.contains("items"));

// el5.classList.add("delete");
// console.dir(el5.classList.contains("delete"))
// el5.classList.remove("");
// console.dir(el5.classList)


let sign = document.querySelector(".Signup");
let form = document.querySelector("#signup");
sign.addEventListener("click",function(){
    form.classList.toggle("hide")
})