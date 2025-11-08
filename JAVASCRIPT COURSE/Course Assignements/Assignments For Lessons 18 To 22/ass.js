// Replace ? With Arithmetic Operators
console.log("%c Exercice 1", "font-size : 25px ; color : red");

console.log(((10 * 20 * 15) % 3) * 190 * 10 * 400); // 0 || it was hard a little

console.log("%c Exercice 2", "font-size : 25px ; color : red");

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * --num); // 6

// Soultion Three
console.log(++num * --num); // 6

// Soultion Four
console.log(num * num + num); // 6

// Solution Five
console.log(num * num * num - true - true); // 6

// Solution Six
console.log((true + true) * ++num); // 6

// Solution seven
console.log(num ** --num - ++num); // 6

// Solution seven
console.log((num * ++num) / (true + true)); // 6

console.log("%c Exercice 3", "font-size : 25px ; color : red");

let Num = "10";

// Solution One
console.log(+Num + +Num); // 20

// Solution Two
console.log(+Num * (true + true)); // 20

// Solution Three
console.log((Num * Num) / (Num / (true + true))); // 20

// Solution Four
console.log(+Num + --Num - --Num + Num + true); // 20

// Solution Four
console.log(--Num + --Num + ++Num); // 20
console.log(Num);

// Exercice 3
console.log("%c Exercice 3", "font-size : 25px ; color : red");

let points = 10;

points += 3;

console.log(points); // 13

points -= 5;

console.log(points); // 8;
