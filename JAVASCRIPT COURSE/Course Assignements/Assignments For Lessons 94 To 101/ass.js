// Third Assignmet

let myP = document.getElementsByTagName("p")[0];
let div = document.getElementsByTagName("div");
myP.remove();

let divStart = document.createElement("div");
let divEnd = document.createElement("div");
let divStartText = document.createTextNode("Start");
let divEndText = document.createTextNode("End");
divStart.appendChild(divStartText);
divEnd.appendChild(divEndText);
div[0].before(divStart);
div[0].after(divEnd);

// Fourth Assignment

let div4 = document.querySelector("div:nth-last-of-type(1) ");

let elzeroWord = div4.lastChild.nodeValue.trim();

console.log(elzeroWord);

// Fifth Assignment

document.addEventListener("click", function (e) {
  console.log(`This is ${e.target.tagName}`);
});
