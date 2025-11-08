// Higher Order Functions

let allLis = document.querySelectorAll("ul li ");

allLis.forEach(function (element) {
  element.onclick = function () {
    allLis.forEach(function (el) {
      el.classList.remove("active");
    });
    element.classList.add("active");
  };
});

console.log(click1);
