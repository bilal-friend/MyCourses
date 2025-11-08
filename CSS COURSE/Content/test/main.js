const hideBtn = document.querySelector("button");
const square = document.querySelector("div");
const pulseBtn = document.querySelector("button:last-of-type");
const circle = document.querySelector(".circle");

hideBtn.addEventListener("click", () => {
  square.classList.toggle("hide");
});

pulseBtn.addEventListener("click", () => {
  circle.classList.toggle("pulse");
});
