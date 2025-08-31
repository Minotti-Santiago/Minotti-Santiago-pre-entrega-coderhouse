let tasks = JSON.parse(localStorage.getItem("tasks")) || []
let taskId = 1

const form = document.getElementById("task-form")
const addButton = document.getElementById("add-button")
const taskContainer = document.getElementById("task-container")

form.addEventListener("submit", function(event){

    event.preventDefault()

    const taskName = document.getElementById("task-name").value;
    const taskDesc = document.getElementById("task-desc").value
    const taskDate = document.getElementById("task-date").value

    const task ={
        id: taskId ++,
        name: taskName,
        description: taskDesc,
        date: taskDate,
    }

    tasks.push(task)
    renderItems()
    addTasksToLocalStorage()

    form.reset()
})



function renderItems() {
    
    taskContainer.innerHTML = ""
    
    tasks.forEach((task) => {
        const taskDiv = document.createElement("div")
        taskDiv.classList.add("task-div")
        
        const taskInfo = document.createElement("div")
        taskInfo.classList.add("task-info")

        const deleteBtn = document.createElement("button")
        deleteBtn.classList.add("delete-btn")
        deleteBtn.textContent = "Eliminar"

        taskInfo.innerHTML = `
            <ul>
                <div class="task-item">
                <h2>ID</h2>
                    <p>${task.id}</p>   
                </div>

                <div class="task-item">
                <h2>Tarea</h2>
                    <p>${task.name}</p>
                </div>

                <div class="task-item">
                <h2>descripcion</h2>
                    <p>${task.description}</p>
                </div>

                <div class="task-item">
                <h2>fecha de vencimiento</h2>
                    <p>${task.date}</p>
                </div>
            </ul>

        `

        deleteBtn.addEventListener("click", () => deleteTask(task.id))

        taskDiv.appendChild(taskInfo)
        taskDiv.appendChild(deleteBtn)
        taskContainer.appendChild(taskDiv)
    })
}

function deleteTask(taskId){
    tasks = tasks.filter((task) => task.id !== taskId)

    renderItems()  
}

const addTasksToLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

const getTasksFromLocalStorage = () => {
    const tasks = localStorage.getItem("tasks")
    return tasks ? JSON.parse(tasks) : []
}

const printTasksFromLocalStorage = (tasks) => {
    tasks.forEach(task => renderItems(task))
}

document.addEventListener("DOMContentLoaded", () => {
    printTasksFromLocalStorage(tasks)

})
