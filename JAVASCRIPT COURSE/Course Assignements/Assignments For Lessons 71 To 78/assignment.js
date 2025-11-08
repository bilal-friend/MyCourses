let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let mixSolution = mix
  .map((el) => (isNaN(el) ? el : ""))
  .reduce((acc, el) => `${acc}${el}`);

console.log(mixSolution);

console.log("############### \n".repeat(2));

let myString = "EElllzzzzzzzeroo";

// Elzero
let myStringSolution = myString
  .split("")
  .filter((elment, index, arr) => elment !== arr[index + 1])
  .reduce((total, currentElement) => `${total}${currentElement}`);

console.log(myStringSolution);

let myStringSolution1 = myString
  .split("")
  .filter((elment, index, arr) => arr.indexOf(elment) === index)
  .reduce((total, currentElement) => `${total}${currentElement}`);

console.log(myStringSolution1);

console.log("############### \n".repeat(2));

let myArray = ["E", ["l", "z"], ["e", ["r", "o"]]];

// Elzero

let myArraySolution = myArray
  .reduce((ac, el) => `${ac},${el}`)
  .split(",")
  .reduce((acc, el) => `${acc}${el}`);

console.log(myArraySolution);

console.log("############### \n".repeat(2));

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let numsAndStringsSolution = numsAndStrings
  .filter((el) => !isNaN(el))
  .map((el) => -el);

console.log(numsAndStringsSolution);

console.log("############### \n".repeat(2));

let nums = [2, 12, 11, 5, 10, 1, 99];

// 500

let numsSolution = nums.reduce(
  (acc, current) => (current % 2 === 0 ? acc * current : acc + current),
  1
);

console.log(numsSolution);
