let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(num - num, num, "")); // ["Ahmed", "Elham", "Osama"];

console.log("=========================");
console.log("=========================");

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends.slice(+true, num)); // ["Eman", "Osama"]

console.log("=========================");
console.log("=========================");

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

console.log("=========================");
console.log("=========================");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  words[website.length][website.length - website.length]
    .slice(website.length)
    .toUpperCase()
); // ZERO

console.log("=========================");
console.log("=========================");

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle) === true) {
  console.log("Found");
} else {
  console.log("Not Found");
}

console.log("=========================");
console.log("=========================");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2).sort().join("").slice(-arr1.length).toLowerCase();

console.log(allArrs); // fxy
