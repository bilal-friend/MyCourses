// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.pow(10, 5)); // 100000
console.log(10 ** 5); // 100000
console.log(1e5); // 100000
console.log(2e4 * 5); // 100000
console.log(Math.trunc(100000.9)); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.floor(100000.4)); // 100000
console.log(+(100000.255658).toPrecision(4)); // 100000
console.log(+(100000.048).toFixed(1)); // 100000
console.log(Math.sqrt(10_000_000_000)); // 100000
console.log(parseInt("100000 cars in the world")); // 100000
console.log(Math.trunc(+parseFloat("100000.5$"))); // 100000
console.log(Math.max(10, 100, 1000, 10000, 100000)); // 100000

// question 2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// question 3

console.log(Number.MAX_SAFE_INTEGER.toFixed(0).length); // 16
console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 16

// question 4

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

// question 5

let num = 10;

console.log(+Number.isInteger(num) + +Number.isInteger(num)); // 2

// question 6

let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(+flt.toFixed(0)); // 10
console.log(parseInt(flt)); // 10

// question 7

let list = [0, 1, 2, 3, 4];
console.log(+(Math.random() * 4).toFixed(0)); // 0 || 1 || 2 || 3 || 4
