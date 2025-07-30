//to add new elememt in html by js
//1. create a new element using createElement function
//2. insert required data in get element using .innerhtml or .innertext
//3. insert new element in parent container using appendChild or append 
let todoContainer=document.querySelector(".todocontainer")

let todos=[
    {
        id:234234,
        title:"study at 9pm"
    },{
        id:234233456,
        title:"play at 6pm"
    }
]
function addTodo(todo){
    let li = document.createElement("li");
    li.innerHTML = `<div>
                <input type="checkbox" name="" id="">
                <h1>${todo.title}</h1>
                <div>
                    <button>❌</button>
                    <button>🖊</button>
                </div>
            </div>`
    todoContainer.appendChild(li);      
}

// let todo={
//     id:234234,
//     title:"study at 9pm"
// }

// addTodo(todo);

function showAllTodos(todos){
    todos.forEach(todo=> {
        addTodo(todo)
    });
}
showAllTodos(todos)