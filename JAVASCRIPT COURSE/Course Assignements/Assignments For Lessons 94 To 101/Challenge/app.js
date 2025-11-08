// [Challenge Episode 101]

// let's start by Header

// create main elements
let myHeader = document.createElement("Header");
let myLogo = document.createElement("h1");
let myMenu = document.createElement("ul");

// append main element to body
document.body.appendChild(myHeader);
myHeader.appendChild(myLogo);
myHeader.appendChild(myMenu);

// append text to logo
let logoText = document.createTextNode("Elzero");
myLogo.appendChild(logoText);

// create 4 li in ul
for (let i = 0; i < 4; i++) {
  let li = document.createElement("li");
  myMenu.appendChild(li);
}
// store all li s in a var for make accessing easy using indexing
let li = document.querySelectorAll("li");

// create text node for li
let liText1 = document.createTextNode("Home");
let liText2 = document.createTextNode("About");
let liText3 = document.createTextNode("Sevice");
let liText4 = document.createTextNode("Contact");

// append text node in li
li[0].append(liText1);
li[1].append(liText2);
li[2].append(liText3);
li[3].append(liText4);

// some styling for body
document.body.style.cssText =
  "font-family:sans-serif;max-width:1300px;margin:auto;padding:20px 30px";

// style Header
myHeader.style.cssText =
  "display:flex;justify-content:space-between;align-items:center";

// style logo
myLogo.style.cssText = "color:#008080;";

//style menu
myMenu.style.cssText = "display:flex;gap:20px;list-style:none;";

// ***************************************************

// let's start doing the content

// create a container that will contain all
let myContainer = document.createElement("div");
myContainer.className = "container";

// loop for creating all boxes
for (let i = 0; i < 15; i++) {
  let box = document.createElement("div");
  let productNumber = document.createElement("h2");
  let productName = document.createElement("p");

  let productNameText = document.createTextNode("product");
  let productNumberText = document.createTextNode(`${i + 1}`);

  myContainer.appendChild(box);

  box.appendChild(productNumber);
  box.appendChild(productName);

  productName.appendChild(productNameText);
  productNumber.appendChild(productNumberText);

  // add a calss for each box
  box.className = `product${i + 1}`;

  // some styling for the box
  box.style.cssText = "text-align:center;background-color:white";
}

// append container to body
document.body.appendChild(myContainer);

// style container
myContainer.style.cssText =
  "background-color:#eee;display:grid; grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );gap:25px;padding:25px";

// ----------------------------------------------

// The last part footer , let do it !!!!

// create footer
let myFooter = document.createElement("footer");
let myFooterText = document.createTextNode("Copyright 2023");

myFooter.appendChild(myFooterText);
document.body.appendChild(myFooter);

// style footer
myFooter.style.cssText =
  "background-color:#008080; padding :50px ;text-align:center; color:white;font-weight:bold;font-size : 25px";
