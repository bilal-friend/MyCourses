// Write Your Code Here
// Edit The Interface To Fix The Problems

// Do Not Edit
type numandstring = number | string;

abstract class Game {
  constructor(public title: string, public price: numandstring) {}
  abstract getLocation(): string;
  abstract getDiscount(): string;
}

// Start Edit And Fix
class RPG extends Game {
  constructor(title: string, price: numandstring, public rate: number) {
    super(title, price);
    this.rate = rate;
  }
  getLocation(): string {
    return "Location";
  }
  getDiscount(): string {
    return "Discount";
  }
}

class Action extends Game {
  constructor(
    title: string,
    price: numandstring,
    public rate: number,
    public company: string
  ) {
    super(title, price);
    this.rate = rate;
    this.company = company;
  }
  getLocation(): string {
    return "Location";
  }
  getDiscount(): string {
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
function showTypes<v1 = void, v2 = void, v3 = void>(
  val1?: v1,
  val2?: v2,
  val3?: v3
): string {
  return `${val1 === undefined ? "Nothing" : val1} - ${
    val2 === undefined ? "Nothing" : val2
  } - ${val3 === undefined ? "Nothing" : val3}`;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true

// **********************************************
console.log("########################### \n".repeat(2));

// Write Class Code Here
class Gamee<T> {
  constructor(public title: T, public price: number) {}
  getDiscount(disc: T): void {
    console.log(`The Discount is ${disc}`);
  }
}
// Do Not Edit Here
let gameOna = new Gamee<string>("Ys", 100);
let gameDos = new Gamee<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOna.title); // "Ys"
console.log(gameOna.price); // 100
gameOna.getDiscount("50"); // "The Discount Is 50"

console.log(gameDos.title); // 2064
console.log(gameDos.price); // 100
gameDos.getDiscount(80); // "The Discount Is 80"
