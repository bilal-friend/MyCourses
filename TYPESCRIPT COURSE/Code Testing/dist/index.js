"use strict";
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Atomic Habit", isbn: 259785 });
itemOne.add({ itemType: "Book", title: "The Power of Habit", isbn: 256845 });
console.log(itemOne.data);
let itemTwo = new Collection();
itemTwo.add({ itemType: "game", title: "Fifa 24", style: "sport", price: 20 });
itemTwo.add({
    itemType: "game",
    title: "Ucharted 4",
    style: "Action",
    price: 50,
});
console.log(itemTwo.data);
