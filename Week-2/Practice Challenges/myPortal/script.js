let tasks = []; //Plain Js List to Carry tasks


//Accessing Task Addition Button and place where to Add Tasks 
let tasksCard = document.getElementById("tasksCard");
let addTaskBtn = document.getElementById("addTaskBtn");



//Craeating Task  form and its elements
let taskForm = document.createElement("form");
taskForm.setAttribute("id", "taskForm");



//Task Form got INput Box here 
let taskInput = document.createElement("input");
taskInput.setAttribute("type", "text");
taskInput.setAttribute("id", "taskInput");
taskForm.setAttribute("placeholder", "Enter your task here");



//Task Input Got Submit Button here
let submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
submitBtn.textContent = "Add Task";



//This Function Make Task FOrm Vissible on Screen and Hide Add Task Button
addTaskBtn.addEventListener("click", function () {

    taskForm.appendChild(taskInput);
    taskForm.appendChild(submitBtn);
    tasksCard.appendChild(taskForm);
    taskForm.style.display = "block";
    addTaskBtn.style.display = "none";

})


taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let taskValue = taskInput.value.trim();
    let task = document.createElement("div");
    task.setAttribute("id", "task");

    let taskDone = document.createElement("input");
    taskDone.setAttribute("type", "checkbox");

    let h2 = document.createElement("h2");
    h2.textContent = taskValue;
    let remTaskBtn = document.createElement("button");
    remTaskBtn.setAttribute("id", "remTaskBtn");
    remTaskBtn.textContent = "Remove Task";
    task.appendChild(taskDone);
    task.appendChild(h2);
    task.appendChild(remTaskBtn);
    tasksCard.appendChild(task);
    taskForm.style.display = "none";
    addTaskBtn.style.display = "block";

    if (taskValue) {
        tasks.push(taskValue);
        taskInput.value = "";
    }


})

let remTaskBtn = document.getElementById("remTaskBtn");
remTaskBtn.addEventListener("click", function () {
    tasksCard.removeChild(task);
    tasks = tasks.filter(t => t !== taskValue);
})