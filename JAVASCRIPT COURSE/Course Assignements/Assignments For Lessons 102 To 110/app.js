// let promptMsg = prompt("Print Number From – To ", "Example: 5-20");

// promptMsg = promptMsg.split("-").sort(function (a, b) {
//   return a - b;
// });

// for (let i = +promptMsg[0]; i <= +promptMsg[1]; i++) {
//   let num = document.createElement("div");
//   num.textContent = i;
//   document.body.appendChild(num);
// }

//

setTimeout(popUp, 5000);

function popUp() {
  let parent = document.createElement("div");

  let popH1 = document.createElement("h1");
  popH1.textContent = "Welcome";

  let popP = document.createElement("P");
  popP.textContent = "Welcome To Elzero Web School";

  let x = document.createElement("span");
  x.textContent = "X";

  parent.append(popH1, popP, x);
  document.body.append(parent);

  x.style.cssText =
    "position:absolute;right:-6px;top:-9px;background:#ff0033;padding:5px;color:white;border-radius:50%;font-family:cursive ; width:25px;height:25px;cursor:pointer";

  parent.style.cssText =
    "position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center;border:1px solid black;padding:30px ;width:70vw;background:#eee;border-radius:6px";

  x.onclick = () => parent.remove();
}

//

let myDiv = document.createElement("div");
myDiv.textContent = 10;
document.body.append(myDiv);

let counter = setInterval(countDown, 1000, myDiv);

function countDown(e) {
  if (e.textContent === "0") {
    clearInterval(counter);
    // location.replace("https://elzero.org");
    return;
  }
  if (e.textContent === "5") {
    open("https://elzero.org", "_blank", "width=500,height=600");
  }
  e.textContent -= 1;
}
