let arr;
let lists = document.querySelector('.list');
function getUsersData(URL) {

    fetch(URL)
        .then((res) => {
            console.log(res)
            return res.json()//return promises

        })
        .then((data) => {
            arr = data;
            console.log(data)
            for (let i = 0; i < arr.length; i++) {
                let li = document.createElement('li');
                let d = arr[i].username;
                li.innerHTML = `
            <li>
            <div>
            ${d}
            </div>
            </li>`;
                lists.appendChild(li);
            }
        })
        .catch((err) => { console.log(err) })
}
//getUsersData('https://jsonplaceholder.typicode.com/users')
getUsersData('http://localhost:3000/users')


function addUser(name,username,URL){
    let data={
        name:name,
        username:username
    }
    fetch(URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then((res)=>{
        return res.json()
    }) 
    .then((data)=>{
        console.log(data)
        if(data.success){
            alert("user registered successfully")
            nameInput.value="";
            userNameInput.value="";
        }else{
            alert(data.error)
        }
    })
}
let registerform=document.querySelector('.form');
let nameInput=document.querySelector('.name');
let usernameinp=document.querySelector('username');
registerform.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name = nameInput.value;
    let username = usernameinp.value;
    addUser(name,username,"http://localhost:2435/adduser")
})
//fetch p do baar .then lgta haii