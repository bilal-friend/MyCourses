let btn = document.querySelector("button");
let input = document.querySelector("input");
let form = document.querySelector(".form");
// to append tasks in
let result = document.querySelector(".result");

// main function
btn.onclick = function () {
  if (input.value === "") {
    return;
  }
  createTasks(input.value);
  addtask(input.value);
  // clear input
  input.value = "";
};

// function side -----------------------------------

// fuction to create tasks and for interact with task
function createTasks(x) {
  let taskElement = document.createElement("div");
  let taskName = document.createElement("span");
  // append taskName to task Element
  taskName.textContent = x;
  // append task name to the taskElement
  taskElement.append(taskName);
  // add className to taskElement
  taskElement.classList.add("taskEle");
  let deleteElement = document.createElement("span");
  deleteElement.textContent = "Delete";
  deleteElement.classList.add("dE");
  // append taskElement to form
  result.appendChild(taskElement);
  // append delete button
  taskElement.append(deleteElement);

  // function for remove task
  deleteElement.onclick = () => {
    deleteElement.parentElement.remove();
    removetask(x);
  };
}

// function add task to localStorage
function addtask(x) {
  var oldTask = localStorage.getItem("Task")
    ? localStorage.getItem("Task").split(",")
    : [];
  oldTask.push(x);
  localStorage.setItem("Task", oldTask);
}

// function remove task from localstorage
function removetask(x) {
  var oldTask = localStorage.getItem("Task").split(",");
  let deletedTaskIndex = oldTask.indexOf(x);
  oldTask.splice(deletedTaskIndex, 1);
  localStorage.setItem("Task", oldTask);
}

// create element that are saved in local storage before
onload = function () {
  if (localStorage.getItem("Task")) {
    for (let i = 0; i < localStorage.getItem("Task").split(",").length; i++) {
      createTasks(localStorage.getItem("Task").split(",")[i]);
    }
  }
};
