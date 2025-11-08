// Write Your Code Here
// Edit The Interface To Fix The Problems
interface Member {
  id: number | string;
  username: string;
  country?: string;
  state: boolean;
  getName: () => string;
}

// Do Not Edit The Code Below
let user: Member = {
  // Property 'country' is missing in type
  id: 100,
  username: "Elzero",
  state: true,
  getName() {
    // 'getName' does not exist in type 'Member'
    return this.username;
  },
};

user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property

// ********************************
console.log("********** \n".repeat(2));
// ********************************

// Create Interface Here
interface Client {
  id: number;
  username: string;
  active: boolean;
  discount: number;
  getPrice: (x: number) => number;
}

// Do Not Edit The Code Below
let client: Client = {
  id: 100,
  username: "Elzero",
  active: true,
  discount: 10,
  getPrice(price: number) {
    return price - this.discount;
  },
};

console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);

// ********************************
console.log("********** \n".repeat(2));
// ********************************

// Do Not Edit The Code Below
interface Man {
  title: string;
  weight: number;
  age: number;
}

interface Bird {
  canFly: boolean;
}
interface Superman extends Man, Bird {
  bodyType: string;
  origin: string;
}
let creature: Superman = {
  title: "Superman",
  weight: 100,
  age: 500,
  canFly: true,
  bodyType: "Iron",
  origin: "Krypton",
};

console.log(creature);

// ********************************
console.log("********** \n".repeat(2));
// ********************************

// Create Class Here
class Player {
  constructor(
    public username: string,
    public job: string,
    public num: number | string,
    public mode?: boolean
  ) {}
  details = () =>
    `${this.mode ? "Vip " : ""}${this.username}, Type Is ${this.job} Level Is ${
      this.num
    }`;
}
// Do Not Edit The Code Below
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);

console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

// ********************************
console.log("********** \n".repeat(2));
// ********************************

class Shorten {
  _title(_title: any) {
    throw new Error("Method not implemented.");
  }
  constructor(
    public id: number,
    public username: string,
    protected title: string
  ) {}
}

let tester = new Shorten(100, "Elzero", "Developer");

console.log(tester.id);
console.log(tester.username);

// ********************************
console.log("********** \n".repeat(2));
// ********************************

class Show {
  constructor(private _title: string) {}
  set title(n: string) {
    this._title = n;
  }
  get title(): string {
    return this._title;
  }
}

let tester2 = new Show("Elzero");

console.log(tester2.title); // Property 'title' does not exist on type 'Show'
tester2.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(tester2.title); // Property 'title' does not exist on type 'Show'

// ********************************
console.log("********** \n".repeat(2));
// ********************************

interface Play {
  id: number;
  title: string;
  level: number | string;
  logIn(): void;
  logOut(msg: string): void;
}

// Create Your Class Here
class Gamer implements Play {
  constructor(
    public id: number,
    public title: string,
    public level: number | string
  ) {}
  logIn(): void {
    console.log("Logged In");
  }
  logOut(msg: string): void {
    console.log("Logged Out, " + msg);
  }
}

let gamer = new Gamer(100, "Elzero", 95);

console.log(gamer.id); // 100
console.log(gamer.title); // "Elzero"
console.log(gamer.level); // 95
gamer.logIn(); // Logged In
gamer.logOut("Good Bye"); // Logged Out, Good Bye
