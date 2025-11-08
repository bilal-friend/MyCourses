// Challenge 1

// Regular Function
let names = function (...names) {
  return `String [${names.join("], [")}] ==> Done !`;
};

console.log(names("Bilal", "Ahmad", "Ossama", "Ibrahim", "Mohammed", "Omar"));

// Arrow Function
let names1 = (...names) => `String [${names.join("], [")}] ==> Done !`;

console.log(names1("Bilal", "Ahmad", "Ossama", "Ibrahim", "Mohammed", "Omar"));

// Challenge 2
console.log("################# \n".repeat(2));

let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => one + two + nums[one - one];

console.log(calc(20, 50, 10, 60));
