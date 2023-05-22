const inputBox = document.getElementById('inputBox')
const addBtn = document.getElementById('addBtn')
const toDoList = document.getElementById('todoList');
let editToDo = null;
addBtn.addEventListener('click', () => {

    const inputText = inputBox.value.trim();

    if (inputText.length <= 0) {

        alert("you must write some thing in your to do")
        return false;
    }
    if(addBtn.value ===  "Edit"){
        editToDo.target.previousElementSibling.innerHTML = inputText
        editLocalToDos(inputText)
        addBtn.value = "Add";
        inputBox.value = "";
    }
    else{

    

        
        const li = document.createElement("li")
    
        const p = document.createElement("p")
    
        // console.log(p);
        p.innerHTML = inputText
    
    
        li.appendChild(p)
    
        toDoList.appendChild(li)
    
        inputBox.value = ""
        
    // creating edit button
    
    const editBtn = document.createElement("button")
    
    editBtn.innerText = "Edit";
    
    li.appendChild(editBtn)
    
    editBtn.classList.add("btn" , "editBtn")

    
    toDoList.appendChild(li)
    
    inputBox.value = ""
    
    
    // saveLocalToDos(inputText)
    
    // creating delete button 
    
    const deleteBtn = document.createElement("button")



    deleteBtn.innerText = "Remove";

    deleteBtn.classList.add("btn","deleteBtn")

    li.appendChild(deleteBtn)
    
    toDoList.appendChild(li)
    
    inputBox.value = ""
    saveLocalToDos(inputText)
    // console.log(saveLocalToDos)

}


})





// uptodate to do



toDoList.addEventListener('click',(e)=>{
    
    // console.log(e.target.innerHTML)
    
    
    if(e.target.innerHTML === "Remove"){
        toDoList.removeChild(e.target.parentElement)
        deleteLocalToDOs(e.target.parentElement)
        // deleteLocalToDos(e.target.parentElement)
        
        // console.log(e.target.parentElement)
        
    }
    
    
    if(e.target.innerHTML === "Edit"){
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus()
        addBtn.value = "Edit"
        editToDo = e; 
    }
    
    
    
})

const saveLocalToDos = (todo)=>{

let todos;
    if(localStorage.getItem("todos")==null){
        todos=[]
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    // todos = JSON.parse(localStorage.getItem("todos"))

    todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(todos))
}


const getLocaToDos = (todo)=>{
    
    let todos;
    if(localStorage.getItem("todos")==null){
        todos=[]
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
        todos.forEach(todo => {
            const li = document.createElement("li")
    
        const p = document.createElement("p")
    
        // console.log(p);
        p.innerHTML = todo
    
    
        li.appendChild(p)
    
        toDoList.appendChild(li)
    
        // inputBox.value = ""
        
    // creating edit button
    
    const editBtn = document.createElement("button")
    
    editBtn.innerText = "Edit";
    
    editBtn.classList.add("btn" , "editBtn")
    
    li.appendChild(editBtn)
    
    // toDoList.appendChild(li)
    
    // inputBox.value = ""
    
    
    // saveLocalToDos(inputText)
    
    // creating delete button 
    
    const deleteBtn = document.createElement("button")

    deleteBtn.innerText = "Remove";

    deleteBtn.classList.add("btn","deleteBtn")

    li.appendChild(deleteBtn)
    
    toDoList.appendChild(li)
    
});
}

}
document.addEventListener('DOMContentLoaded', getLocaToDos)



const deleteLocalToDOs = (todo)=>{
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[]
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    
    let toDoText = todo.children[0].innerHTML;
    let toDoIndex = todos.indexOf(toDoText)
    todos.splice(toDoIndex,1)  
    
    localStorage.setItem("todos",JSON.stringify(todos))

    console.log(toDoIndex);
}

const editLocalToDos = (todo)=>{

    let todos = JSON.parse(localStorage.getItem("todos"))


    let toDoIndex = todos.indexOf(todo)


    todos[toDoIndex] = inputBox.value


    localStorage.setItem("todos",JSON.stringify(todos))
}






