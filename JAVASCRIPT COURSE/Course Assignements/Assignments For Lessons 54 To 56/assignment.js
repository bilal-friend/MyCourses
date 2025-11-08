let friends = [
  "Ahmed",
  "Sayed",
  "Ali",
  1,
  2,
  "Mahmoud",
  "Amany",
  "Bilal",
  "Adam",
  "adam",
  "Rhimou",
];
let index = 0;
let counter = 0;
let letter = friends[0][0];

while (index < friends.length) {
  if (
    typeof friends[index] !== "string" ||
    friends[index].startsWith(letter) ||
    friends[index].startsWith(letter.toLowerCase())
  ) {
    index++;
    continue;
  }
  console.log(`${++counter} =>  ${friends[index]}`);
  index++;
}

/* Output
"1 => Sayed"
"2 => Mahmoud"
*/
