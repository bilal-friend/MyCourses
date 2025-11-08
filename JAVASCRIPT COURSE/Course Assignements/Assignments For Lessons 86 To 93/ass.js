// let div1 = document.querySelector("div");
// let div2 = document.querySelector(".element");
// let div3 = document.querySelector("[name='js']");
// let div4 = document.querySelector("#elzero");
// let div5 = document.querySelectorAll("div")[0];
// let div6 = document.querySelectorAll(".element")[0];
// let div7 = document.querySelectorAll("[name='js']")[0];
// let div8 = document.querySelectorAll("#elzero")[0];
// let div9 = document.getElementsByTagName("div")[0];
// let div10 = document.getElementsByClassName("element")[0];
// let div11 = document.getElementById("elzero");
// let div12 = document.getElementsByName("js")[0];
// let div13 = document.body.firstChild;
// let div14 = document.body.firstElementChild;
// let div15 = document.body.children[0];

// console.log(div15);

// *************************************

// let myLogo = document.images;

// console.log(myLogo);

// for (let i = 0; i < myLogo.length; i++) {
//   document.images[i].src =
//     "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   document.images[i].alt = "Elzero Logo";
//   document.images[i].style.cssText = "background:dodgerblue;padding:20px";
// }

// **************

// let input = document.querySelector("[name='dollar']");
// let result = document.querySelector(".result");

// window.onload = () => input.focus();

// setInterval(() => {
//   result.textContent = `{ ${input.value * 1} } USD Dollar = { ${(
//     input.value * 10.14
//   ).toFixed(2)} } Maroccan Dirham `;
// }, 100);

// -----------------------------------

// let divOne = document.querySelector("[title='one'");
// let divTwo = document.querySelector("[title='two'");

// divOne.className = divOne.title;
// divTwo.className = divTwo.title;

// divOne.after(divTwo);

// divTwo.textContent = `${divTwo.textContent} ${divTwo.attributes.length}`;

// // =======================

// let myImgs = document.images;

// for (let i = 0; i < myImgs.length; i++) {
//   if (myImgs[i].hasAttribute("alt")) {
//     myImgs[i].alt = "Old";
//   } else {
//     myImgs[i].alt = "Elzero New";
//   }
// }

// *******************************

let myForm = document.forms[0];
let inputs = document.getElementsByTagName("input");
let select = document.getElementsByTagName("select")[0];
let results = document.querySelector(".results");

myForm.style.cssText =
  "display:flex;flex-direction:column;gap:15px ; max-width:480px;margin : 20px auto;";

for (let i = 0; i < 2; i++) {
  inputs[i].style.cssText = "padding:  5px ; outline:none ";
}

inputs[2].style.cssText =
  "background:#008080;color:white;border:none;padding:7px 20px;border-radius:5px";

results.style.cssText =
  "display:flex ; gap:10px;flex-wrap:wrap;text-align:center;";

// document.forms[0].onsubmit = function (e) {
//   results.innerHTML = "";
//   for (let i = 0; i < inputs[0].value; i++) {
//     let newElement = document.createElement(select.value);
//     let newelementText = document.createTextNode(inputs[1].value);
//     newElement.className = "box";
//     newElement.title = "Element";
//     newElement.id = `id-${i + 1}`;
//     newElement.style.cssText =
//       "width:150px ; background-color:#E26310;color:white;padding:10px 0px;border-radius:6px";

//     newElement.appendChild(newelementText);
//     results.appendChild(newElement);
//   }

//   console.log(select.value);
//   e.preventDefault();
// };

myForm.onsubmit = function (e) {
  results.innerHTML = "";

  addItem();

  e.preventDefault();
};

function addItem() {
  for (let i = 0; i < inputs[0].value; i++) {
    results.innerHTML += `<${select.value} class="box" title="Element" id="id-${
      i + 1
    }">${inputs[1].value}<${select.value}>`;

    let box = document.querySelectorAll(".box");
    box[i].style.cssText =
      "width:150px ; background-color:#E26310;color:white;padding:10px 0px;border-radius:6px";
  }
}
