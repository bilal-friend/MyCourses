let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.reverse().splice(zero, --counter);
/* Solution for this Qu 
my.pop();
my.pop();
my.reverse();

my.reverse();
my.shift();
my.shift();

my = my
  .slice(--counter, -counter)
  .reverse()
  .concat(my.slice(zero, counter).reverse()); */
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(--counter, -counter)); // ["Elham", "Mazero"]

console.log(
  `${my[counter][zero]}${my[counter][counter]}${my[++counter].slice(counter)}`
); // "Elzero"

console.log(counter);

console.log(
  `${my[counter].slice(-counter).charAt(zero)}${my[counter]
    .slice(-counter)
    .charAt(--counter)
    .toUpperCase()}`
); // "rO"
