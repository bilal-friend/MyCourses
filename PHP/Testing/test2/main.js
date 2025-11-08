let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "index.php", true);
  xhr.send(formData);
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };
});
