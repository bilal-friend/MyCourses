let inputs = document.querySelectorAll("input");
let select = document.querySelector("select");

// loop on inputs
for (let i = 0; i < inputs.length; i++) {
  // add input value from session storage if it's exist
  inputs[i].value = sessionStorage.getItem(inputs[i].name);
  // add entered input value to session storage on blur
  inputs[i].onblur = () => {
    sessionStorage.setItem(inputs[i].name, inputs[i].value);
  };
}

// add select value from session storage if it's exist
select.value = sessionStorage.getItem(select.name);
// add choosed option to session storage on change
select.onchange = () => {
  sessionStorage.setItem(select.name, select.value);
};
