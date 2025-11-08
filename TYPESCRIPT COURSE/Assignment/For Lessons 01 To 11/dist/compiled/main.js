"use strict";
function calculate(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(calculate(10, 20));
console.log(calculate(+true, +true));
console.log("########".repeat(2));
function printInfo(valueOne, valueTwo) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
console.log(printInfo(10, 20));
console.log(printInfo("10", "20"));
console.log("########".repeat(2));
let arr = [];
arr.push(10);
arr.push([true, false]);
arr.push(["hello", [1, 2, 3]]);
arr.push(6);
arr.push([true, true, false]);
arr.push(["world", [4, 5, 6]]);
console.log(arr);
console.log("########".repeat(2));
function reportErrors(username, age) {
    return `Username: ${username}, Age : ${age}`;
}
console.log(reportErrors("Elzero", 40));
console.log("########".repeat(2));
let nothing;
let theName = "Elzero";
function showMyDetails(a = "", b = "", c) {
    return `${a}${b}${c}`;
}
console.log(showMyDetails(nothing, nothing, theName));
console.log("########".repeat(2));
function showMsg(user, age, country) {
    return `${user || ""} ${age || ""} ${country || ""}`;
}
console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));
console.log("########".repeat(2));
function printInConsole(...parms) {
    for (let i = 0; i < parms.length; i++) {
        console.log(`The Value is ${parms[i]} And Type Is ${typeof parms[i]}`);
    }
    console.log("Done");
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=main.js.map