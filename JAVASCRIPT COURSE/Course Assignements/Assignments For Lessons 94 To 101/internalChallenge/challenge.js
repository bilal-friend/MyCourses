let addClassInput = document.querySelector(".classes-to-add");
let removeClassInput = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector('[title="Current"]');
let result = document.querySelector(".classes-list div");

// current Elements Classes
window.onload = createElement();

addClassInput.onblur = () => {
  let classToAdd = addClassInput.value.split(" ");

  for (let i = 0; i < classToAdd.length; i++) {
    if (classToAdd[i] === "") {
      continue;
    }
    currentElement.classList.add(classToAdd[i].toLowerCase());
  }
  createElement();
  addClassInput.value = "";
};

removeClassInput.onblur = () => {
  let classToRemove = removeClassInput.value.split(" ");

  for (let i = 0; i < classToRemove.length; i++) {
    if (classToRemove[i] === "") {
      continue;
    }
    currentElement.classList.remove(classToRemove[i].toLowerCase());
  }
  createElement();
  removeClassInput.value = "";
};

function createElement() {
  result.innerHTML = "";
  let currentElementClass = currentElement.classList.value.split(" ").sort();

  for (let i = 0; i < currentElementClass.length; i++) {
    if (currentElement.classList.length === 0) {
      break;
    }
    let span = document.createElement("span");
    let spanText = document.createTextNode(currentElementClass[i]);
    span.appendChild(spanText);
    // append created element to result
    result.append(span);
  }

  if (result.children.length === 0) {
    result.append("No Classes To Show");
  }
}
