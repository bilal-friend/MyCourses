/////////////////////Assignment 2/////////////////////////////////
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "./articles.json");
myRequest.send();

myRequest.onreadystatechange = function () {
  console.log(myRequest.readyState);
  console.log(myRequest.status);

  if (myRequest.readyState === 4 && myRequest.status === 200) {
    console.log(myRequest.responseText);
    myRequest.onloadend = function () {
      console.log("Data Loaded");
      ////////////////////////Assignment 3////////////////////////////////////
      let mainData = JSON.parse(myRequest.responseText);
      console.log(mainData);
      for (let i = 0; i < mainData.length; i++) {
        mainData[i].category = "All";
      }
      let updateData = JSON.stringify(mainData);
      console.log(updateData);

      /////////////////////////// Assignment 4 ///////////////////////////
      let container = document.createElement("div");
      container.id = "data";
      document.body.appendChild(container);

      for (let i = 0; i < mainData.length; i++) {
        let card = document.createElement("Div");
        container.appendChild(card);

        let titile = document.createElement("h2");
        let titletext = document.createTextNode(mainData[i].title);
        titile.appendChild(titletext);
        card.appendChild(titile);

        let article = document.createElement("p");
        let articleText = document.createTextNode(
          "Article Number " + mainData[i].id + " Body"
        );
        article.appendChild(articleText);
        card.appendChild(article);

        let author = document.createElement("p");
        let authorName = document.createTextNode(mainData[i].author);
        author.appendChild(authorName);
        card.appendChild(author);

        let category = document.createElement("p");
        let categoryText = document.createTextNode(mainData[i].category);
        category.appendChild(categoryText);
        card.appendChild(category);
      }
    };
  }
};

// finish
