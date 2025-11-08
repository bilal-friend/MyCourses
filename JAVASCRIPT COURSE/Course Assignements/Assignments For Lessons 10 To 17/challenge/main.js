// chalenge || espisode 17

let theTitle = "Elzero",
  webDescription = "Elzero Web School",
  postDate = `25/10`;

let ourCard = `
  <div>
  <h3>${theTitle}</h3>
  <p>${webDescription}</p>
  <span>${postDate}</span>

  </div>
  `;

// using for loop
for (let i = 0; i < 4; i++) {
  document.write(ourCard);
}

// using repeat
document.write(ourCard.repeat(5));
