let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i === exclude) {
    continue;
  }
  console.log(i);
}

/* Output
10
20
30
50
60
70
80
90
100
*/

console.log("==========================");

start = 10;
end = 0;
let stop = 3;

for (let i = start; i >= stop; i--) {
  if (i < start) {
    console.log(start.toString().charAt(true) + i);
    continue;
  }
  console.log(i);
}

/* Output
10
09
08
07
06
05
04
03*/
console.log("==========================");
start = 1;
end = 6;
let breaker = 2;

/* Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4*/

for (let i = start; i <= end; i++) {
  console.log(i);
  for (let y = start; y <= breaker; y++) {
    console.log(`    --${y * breaker}`);
  }
}

console.log("==========================");

let index = 10;
let jump = 2;
end = 0;

for (;;) {
  console.log(index);
  if (index == jump * jump) {
    break;
  }
  index -= jump;
}

/* Output
10
8
6
4
*/

console.log("==========================");

let friends = [
  "Ahmed",
  "Sayed",
  "Eman",
  "Mahmoud",
  "Ameer",
  "Osama",
  "Sameh",
  "Bilal",
  "Rhimou",
  "Anis",
  "Omar",
];
let letter = "a";

/* Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"

*/

for (
  let n = friends.length - friends.length,
    x = friends.length - (friends.length - 1);
  n < friends.length;
  n++
) {
  if (
    friends[n].startsWith(letter.toLowerCase()) === true ||
    friends[n].startsWith(letter.toUpperCase()) === true
  ) {
    continue;
  }
  console.log(`${x} => ${friends[n]}`);
  x++;
}

console.log("==========================");

start = 0;
let swappedName = "elZerO";
let result = "";

for (; start < swappedName.length; start++) {
  if (swappedName[start].toLowerCase() === swappedName[start]) {
    result += swappedName[start].toUpperCase();
  } else {
    result += swappedName[start].toLowerCase();
  }

  if (start == swappedName.length - 1) {
    swappedName = result;
  }
}

console.log(swappedName);

/* Output
("ELzERo");

*/

start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4, 5, 6, 8, 1, 5, 6];

for (; start < mix.length; start++) {
  if (typeof mix[start] !== "number" || mix[start] === 1) {
    continue;
  }
  console.log(mix[start]);
}

/*Output
2
3
4*/

// today is my first dat at school
