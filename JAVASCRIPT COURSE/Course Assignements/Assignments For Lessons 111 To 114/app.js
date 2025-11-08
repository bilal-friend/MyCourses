let resultText = document.querySelector("textarea");
let fonts = document.querySelector("#fonts");
let colors = document.querySelector("#colors");
let fontsize = document.querySelector("#fontSize");

if (localStorage.getItem("color") != null) {
  resultText.style.color = localStorage.getItem("color");
  setAttr(colors, localStorage.getItem("color"));
} else {
  onload = addFirstStyle(colors);
}

if (localStorage.getItem("fontFamily") != null) {
  resultText.style.fontFamily = localStorage.getItem("fontFamily");
  setAttr(fonts, localStorage.getItem("fontFamily"));
} else {
  onload = addFirstStyle(fonts);
}

if (localStorage.getItem("fontSize") != null) {
  resultText.style.fontSize = localStorage.getItem("fontSize") + "px";
  setAttr(fontsize, localStorage.getItem("fontSize"));
} else {
  onload = addFirstStyle(fontsize);
}

function addFirstStyle(select) {
  let selected = document.querySelector(`#${select.id} [selected]`);
  stylingType(selected.parentElement);
}

main(fonts);
main(colors);
main(fontsize);

function main(select) {
  select.onchange = function () {
    setAttr(select, select.value);

    for (let i = 0; i < select.children.length; i++) {
      if (select.children[i].value == select.value) {
        // style text aria with choosed options
        stylingType(select);

        // add to local storage
        localStorage.setItem(select.name, select.value);
      }
    }
  };
}

function setAttr(select, ref) {
  for (let i = 0; i < select.children.length; i++) {
    // Remove selected Attr from all option
    if (select.children[i].hasAttribute("selected")) {
      select.children[i].removeAttribute("selected");
    }
    // add selected attr to choosed option
    if (select.children[i].value == ref) {
      select.children[i].setAttribute("selected", "");
    }
  }
}

function stylingType(select) {
  if (select.name === "fontFamily") {
    resultText.style.fontFamily = select.value;
  } else if (select.name === "color") {
    resultText.style.color = select.value;
  } else if (select.name === "fontSize") {
    console.log(select.value);
    resultText.style.fontSize = select.value + "px";
  }
}
