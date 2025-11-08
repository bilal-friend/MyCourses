// Needed Output

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[setOfNumbers.size - 1]);

console.log("********* \n".repeat(2));
// **********************************************************

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(new Set(myFriends.sort()));

console.log("********* \n".repeat(2));

// ******************************************************

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

myMap = new Map(Object.entries(myInfo));
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));

console.log(Object.entries({ q: 2, d: 5 })); // array(2),array(2)
// [q,2],[d,5]

console.log("********* \n".repeat(2));

// ******************************************************************

let theNumber = 100020003000;

solution = Number([...new Set(theNumber.toString())].sort().join(""));
console.log(solution);

console.log("********* \n".repeat(2));

let theName = "Elzero";

console.log(Array.from(theName));
console.log([...theName]);
console.log(theName.split(""));
console.log(Object.assign([], theName));
console.log(Array.from(new Set(theName)));

// ****************************************************************

console.log("********* \n".repeat(2));

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let n = 0; // represent the number of numbers in an array

chars = chars.filter(function (e) {
  typeof e === "number" ? n++ : (n += 0);
  return typeof e === "string";
});

chars = [...chars.slice(0, n), ...chars];

console.log(chars, n);

// ******************************************************************

console.log("********* \n".repeat(2));

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));
numsOne.push(...numsTwo);
console.log(numsOne);

