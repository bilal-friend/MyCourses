let input = document.querySelector("input");
let btn = document.querySelector("button");
let result = document.querySelector(".result");

let arrayOfTasks = [];

getDataFromLocalStorage();

for (let i = 0; i < arrayOfTasks.length; i++) {
  addElementsToPageFrom(arrayOfTasks);
}

btn.onclick = () => {
  if (input.value !== "") {
    addTaskToArray(input.value); /// add Task To Array of Tasks
    // clear input
    input.value = "";
  }

  console.log(arrayOfTasks);
};

function addTaskToArray(taskName) {
  // task Data
  const task = {
    id: Date.now(),
    title: taskName,
    done: false,
  };
  // Push task to Array of Tasks
  arrayOfTasks.push(task);

  addElementsToPageFrom(arrayOfTasks); // Add Tasks To Page
  addDataToLocalStorageFrom(arrayOfTasks);
}

function getDataFromLocalStorage() {
  let data = localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    console.log(tasks);

    arrayOfTasks = arrayOfTasks.concat(tasks);
  }
}

function addElementsToPageFrom(arrayOfTasks) {
  // clear tasks div
  result.innerHTML = "";

  // Looping of array of tasks
  arrayOfTasks.forEach((task) => {
    let taskElement = document.createElement("div");
    taskElement.textContent = task["title"];
    taskElement.className = "taskElement";
    taskElement.setAttribute("data-id", task.id);
    result.appendChild(taskElement);

    taskElement.onclick = function () {
      taskElement.classList.toggle("Done");
      task.done = taskElement.classList.contains("Done");
      addDataToLocalStorageFrom(arrayOfTasks);
    };

    // checking
    if (task.done) {
      taskElement.classList.add("Done");
    }

    let deleteTaskButton = document.createElement("span");
    deleteTaskButton.textContent = "Delete";
    deleteTaskButton.className = "deleteTaskButton";
    taskElement.append(deleteTaskButton);

    deleteTaskButton.onclick = () => {
      deleteTaskButton.parentElement.remove();

      arrayOfTasks = arrayOfTasks.filter(
        (task) =>
          task.id != deleteTaskButton.parentElement.getAttribute("data-id")
      );
      addDataToLocalStorageFrom(arrayOfTasks);
    };
  });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
  localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}
