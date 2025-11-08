let myAdmins = ["Ahmed", "Osama", "Sayed", "Bilal", "Hasan", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Badr",
  "Bobker",
  "Hosam",
  "hatim",
  "anis",
];

let i = 0;
while (true) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  i++;
}
document.write(`<div>We have ${i} Admins </div> <hr>`);

for (let y = 0; y < i; y++) {
  document.write(`<div>The Admin For Team ${y + 1} is ${myAdmins[y]}`);
  document.write("<h3>Team Members : </h3>");

  for (let x = 0; x < myEmployees.length; x++) {
    if (myEmployees[x] == "Stop") {
      break;
    }
    if (
      myEmployees[x].startsWith(myAdmins[y][0].toLowerCase()) == true ||
      myEmployees[x].startsWith(myAdmins[y][0].toUpperCase()) == true
    ) {
      document.write(`<p>- ${myEmployees[x]}</p>`);
    }
  }
  document.write(`</div> <hr>`);
}

console.log(myAdmins);
