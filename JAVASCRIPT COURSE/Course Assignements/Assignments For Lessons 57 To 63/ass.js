console.log("##################################### \n".repeat(2));

function sayHello(theName = "Unkonw", theGender) {
  console.log(
    `Hello ${
      theGender === "Male" ? "Mr " : theGender === "Female" ? "Miss " : ""
    }${theName}`
  );
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log("##################################### \n".repeat(2));

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
    return;
  }

  console.log(
    operation === "subtract"
      ? firstNum - secondNum
      : operation === "multiply"
      ? firstNum * secondNum
      : firstNum + secondNum
  );
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

console.log("##################################### \n".repeat(2));

function ageInTime(theAge) {
  if (theAge >= 110 || theAge <= 10) {
    console.log(`Age Out Of Range`);
    return;
  }

  console.log(`your Age per Years ==> ${theAge} Years`);
  console.log(`your Age per Years ==> ${theAge * 12} Months`);
  console.log(`your Age per Years ==> ${theAge * 365} Days`);
  console.log(`your Age per Years ==> ${theAge * 8760} Hours`);
  console.log(`your Age per Years ==> ${theAge * 525600} Minutes`);
  console.log(`your Age per Years ==> ${theAge * 3.154e7} Seconds 
  `);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
ageInTime(16);

console.log("##################################### \n".repeat(2));

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (; startYear <= endYear; startYear++) {
    document.write(`<option value="${startYear}">${startYear}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

console.log("##################################### \n".repeat(2));

function multiply(...arg) {
  let result = 1;

  for (let i = 0; i < arg.length; i++) {
    if (typeof arg[i] === "string") {
      continue;
    }
    result *= Math.trunc(arg[i]);
  }

  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
