"use strict";
// Write Your Code Here
// Edit The Interface To Fix The Problems
class Game {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
// Start Edit And Fix
class RPG extends Game {
    constructor(title, price, rate) {
        super(title, price);
        this.rate = rate;
        this.rate = rate;
    }
    getLocation() {
        return "Location";
    }
    getDiscount() {
        return "Discount";
    }
}
class Action extends Game {
    constructor(title, price, rate, company) {
        super(title, price);
        this.rate = rate;
        this.company = company;
        this.rate = rate;
        this.company = company;
    }
    getLocation() {
        return "Location";
    }
    getDiscount() {
        return "Discount";
    }
}
// End Edit And Fix
// Do Not Edit
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");
console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"
console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"
// **********************************************
console.log("########################### \n".repeat(2));
// Write Function Code Here
function showTypes(val1, val2, val3) {
    return `${val1 === undefined ? "Nothing" : val1} - ${val2 === undefined ? "Nothing" : val2} - ${val3 === undefined ? "Nothing" : val3}`;
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes("String")); // String - Nothing - Nothing
console.log(showTypes("String", 100)); // String - 100 - Nothing
console.log(showTypes("String", 100, true)); // String - 100 - true
// **********************************************
console.log("########################### \n".repeat(2));
// Write Class Code Here
class Gamee {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(disc) {
        console.log(`The Discount is ${disc}`);
    }
}
// Do Not Edit Here
let gameOna = new Gamee("Ys", 100);
let gameDos = new Gamee(2064, 100); // There's A Game Called "2064"
console.log(gameOna.title); // "Ys"
console.log(gameOna.price); // 100
gameOna.getDiscount("50"); // "The Discount Is 50"
console.log(gameDos.title); // 2064
console.log(gameDos.price); // 100
gameDos.getDiscount(80); // "The Discount Is 80"
