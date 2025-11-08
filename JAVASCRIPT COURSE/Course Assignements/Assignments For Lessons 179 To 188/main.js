let myPromise = (api) => {
  let myRequest = new XMLHttpRequest();
  myRequest.open("GET", api);
  myRequest.send();
  return new Promise((res, rej) => {
    myRequest.onload = () => {
      if ((myRequest.status === 200, myRequest.readyState === 4)) {
        res(JSON.parse(myRequest.responseText));
      } else {
        rej(Error("No Data Found"));
      }
    };
  });
};
myPromise("./file.json")
  .then((resValue) => {
    for (let i = 0; i < 5; i++) {
      let title = document.createElement("h3");
      title.textContent = resValue[i].title;
      document.body.appendChild(title);

      let para = document.createElement("p");
      para.textContent = resValue[i].description;
      document.body.appendChild(para);
    }
  })
  .catch((rejValue) => console.log(rejValue));

myPromise("./file.json");

async function getaData(api) {
  try {
    let data = await fetch(api);
    let jsData = await data.json();
    for (let i = 0; i < 5; i++) {
      let title = document.createElement("h3");
      title.textContent = jsData[i].title;
      document.body.appendChild(title);

      let para = document.createElement("p");
      para.textContent = jsData[i].description;
      document.body.appendChild(para);
    }
  } catch {
    console.log(Error("no data found"));
  }
}

getaData("./file.json");
