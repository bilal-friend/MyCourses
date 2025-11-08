import calc from "./mod-one.js";
import { modOne } from "./mod-two.js";
let myBirthday = new Date("2006-05-30");
let dateNow = new Date();

let diffS = (dateNow - myBirthday) / 1000;
let diffM = diffS / 60;
let diffH = diffM / 60;
let diffD = diffH / 24;
let diffMo = diffD / 30;
let diffY = diffMo / 12;

console.log(diffS.toFixed(2) + " Seconds"); //537868184.94
console.log(diffM.toFixed(2) + " Minutes"); // 8964469.74;
console.log(diffH.toFixed(2) + " Hours"); // 149407.84
console.log(diffD.toFixed(2) + " Days"); // 6225.32
console.log(diffMo.toFixed(2) + " Months"); // 17.29
console.log(diffY.toFixed(2) + " Years");

console.log("##########################\n ".repeat(3));

let date1 = new Date(0);
// Thu Jan 01 1970 01:00:00 GMT+0100 (West Africa Standard Time)

date1.setFullYear("1980");
date1.setHours(0);
date1.setSeconds(1);

console.log(date1);
// Tue Jan 01 1980 00:00:01 GMT+0100 (West Africa Standard Time)

console.log("##########################\n ".repeat(3));

let date2 = new Date();
date2.setDate(0);
console.log(date2);
console.log(
  `Previous Month is ${date2.toLocaleString("en-US", {
    month: "short",
  })} And Last Day is ` + date2.getDate()
);

console.log("##########################\n ".repeat(3));

let birth1 = new Date("2006-05-30");
let birth2 = new Date("05/30/2006");
let birth3 = new Date("2006 May 30");

console.log(birth1);
console.log(birth2);
console.log(birth3);

console.log("##########################\n ".repeat(3));

let start = performance.now();
let i = 0;
// while (i < 100000) {
//   console.log(i);
//   i++;
// }

let end = performance.now();
console.log("Loop Took " + Math.trunc(end - start) + " Milliseconds.");
// Loop Took 7438 Milliseconds.

console.log("##########################\n ".repeat(3));
const gen = function* () {
  let n = 7;
  while (true) {
    yield n * n;
    n++;
  }
};
let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

console.log("##########################\n ".repeat(3));

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

const genAll = function* () {
  yield* new Set(genNumbers());
  yield* new Set(genLetters());
};

let generator1 = genAll();

console.log(generator1.next()); // {value: 1, done: false}
console.log(generator1.next()); // {value: 2, done: false}
console.log(generator1.next()); // {value: 3, done: false}
console.log(generator1.next()); // {value: 4, done: false}
console.log(generator1.next()); // {value: 5, done: false}
console.log(generator1.next()); // {value: "A", done: false}
console.log(generator1.next()); // {value: "B", done: false}
console.log(generator1.next()); // {value: "C", done: false}
console.log(generator1.next()); // {value: "D", done: false}

console.log("##########################\n ".repeat(3));

console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
